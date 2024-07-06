#!/bin/bash

KEYCLOAK_URL="http://localhost:50000"
ADMIN_USER="administrator"
ADMIN_PASSWORD="administrator"
JSON_FILE_PATH="$1"

# Função para obter token de acesso
get_access_token() {
  TOKEN=$(curl -s -X POST "${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "username=${ADMIN_USER}" \
    -d "password=${ADMIN_PASSWORD}" \
    -d 'grant_type=password' \
    -d 'client_id=admin-cli' | jq -r '.access_token')
  if [ -z "$TOKEN" ]; then
    echo "Erro ao obter token de acesso"
    exit 1
  fi
}

# Função para verificar se o realm já existe
realm_exists() {
  local REALM_NAME=$1
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}" \
    -H "Authorization: Bearer ${TOKEN}")
  if [ "$RESPONSE" -eq 200 ]; then
    echo "O realm ${REALM_NAME} já existe"
    exit 1
  fi
}

# Função para criar o realm
create_realm() {
  local REALM_CONFIG=$1
  local REALM_NAME=$(echo "${REALM_CONFIG}" | jq -r '.realm')
  RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms" \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d "${REALM_CONFIG}")
  if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
    echo "Erro ao criar realm: $REALM_NAME"
    cat response.txt
    exit 1
  fi
}

# Função para verificar se a role já existe
role_exists() {
  local REALM_NAME=$1
  local ROLE_NAME=$2
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/roles/${ROLE_NAME}" \
    -H "Authorization: Bearer ${TOKEN}")
  if [ "$RESPONSE" -eq 200 ]; then
    return 0
  else
    return 1
  fi
}

# Função para criar roles
create_roles() {
  local REALM_NAME=$1
  local ROLES=$2
  for ROLE in $(echo "${ROLES}" | jq -r '.[] | @base64'); do
    _jq() {
      echo "${ROLE}" | base64 --decode | jq -r "${1}"
    }
    local ROLE_NAME=$(_jq '.name')
    local ROLE_DESCRIPTION=$(_jq '.description')
    if [ -z "$ROLE_NAME" ]; then
      echo "Erro: Nome da role não definido"
      exit 1
    fi
    if role_exists "${REALM_NAME}" "${ROLE_NAME}"; then
      echo "A role ${ROLE_NAME} já existe no realm ${REALM_NAME}"
      continue
    fi
    RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/roles" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "'"${ROLE_NAME}"'",
        "description": "'"${ROLE_DESCRIPTION}"'"
    }')
    if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
      echo "Erro ao criar role: $ROLE_NAME"
      cat response.txt
      exit 1
    fi
  done
}

# Função para criar grupos
create_groups() {
  local REALM_NAME=$1
  local GROUPS=$2
  for GROUP in $(echo "${GROUPS}" | jq -r '.[] | @base64'); do
    _jq() {
      echo "${GROUP}" | base64 --decode | jq -r "${1}"
    }
    local GROUP_NAME=$(_jq '.name')
    local GROUP_ATTRIBUTES=$(_jq '.attributes')
    if [ -z "$GROUP_NAME" ]; then
      echo "Erro: Nome do grupo não definido"
      exit 1
    fi
    RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/groups" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "'"${GROUP_NAME}"'",
        "attributes": '"${GROUP_ATTRIBUTES}"'
    }')
    if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
      echo "Erro ao criar grupo: $GROUP_NAME"
      cat response.txt
      exit 1
    fi
  done
}

# Função para criar usuários
create_users() {
  local REALM_NAME=$1
  local USERS=$2
  for USER in $(echo "${USERS}" | jq -r '.[] | @base64'); do
    _jq() {
      echo "${USER}" | base64 --decode | jq -r "${1}"
    }
    local USERNAME=$(_jq '.username')
    local PASSWORD=$(_jq '.password')
    local USER_ROLES=$(_jq '.roles')
    local USER_GROUPS=$(_jq '.groups')
    if [ -z "$USERNAME" ] || [ -z "$PASSWORD" ]; then
      echo "Erro: Nome de usuário ou senha não definidos"
      exit 1
    fi
    RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json" \
      -d '{
        "username": "'"${USERNAME}"'",
        "enabled": true,
        "credentials": [{
            "type": "password",
            "value": "'"${PASSWORD}"'",
            "temporary": false
        }]
    }')
    if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
      echo "Erro ao criar usuário: $USERNAME"
      cat response.txt
      exit 1
    fi

    # Obtendo o ID do usuário recém-criado
    USER_ID=$(curl -s -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users?username=${USERNAME}" \
      -H "Authorization: Bearer ${TOKEN}" | jq -r '.[0].id')

    # Atribuindo roles ao usuário
    for ROLE in $(echo "${USER_ROLES}" | jq -r '.[]'); do
      ROLE_ID=$(curl -s -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/roles/${ROLE}" -H "Authorization: Bearer ${TOKEN}" | jq -r '.id')
      curl -s -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users/${USER_ID}/role-mappings/realm" \
        -H "Authorization: Bearer ${TOKEN}" \
        -H "Content-Type: application/json" \
        -d '[{
          "id": "'"${ROLE_ID}"'",
          "name": "'"${ROLE}"'"
      }]'
    done

    # Atribuindo grupos ao usuário
    for GROUP in $(echo "${USER_GROUPS}" | jq -r '.[]'); do
      GROUP_ID=$(curl -s -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/groups?search=${GROUP}" \
        -H "Authorization: Bearer ${TOKEN}" | jq -r '.[0].id')
      curl -s -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/users/${USER_ID}/groups/${GROUP_ID}" \
        -H "Authorization: Bearer ${TOKEN}" \
        -H "Content-Type: application/json"
    done
  done
}

# Função para verificar se o cliente já existe
client_exists() {
  local REALM_NAME=$1
  local CLIENT_ID=$2
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients?clientId=${CLIENT_ID}" \
    -H "Authorization: Bearer ${TOKEN}")
  if [ "$RESPONSE" -eq 200 ]; then
    return 0
  else
    return 1
  fi
}

# Função para criar clientes
create_clients() {
  local REALM_NAME=$1
  local CLIENTS=$2
  for CLIENT in $(echo "${CLIENTS}" | jq -r '.[] | @base64'); do
    _jq() {
      echo "${CLIENT}" | base64 --decode | jq -r "${1}"
    }
    local CLIENT_ID=$(_jq '.clientId')
    local CLIENT_SECRET=$(_jq '.secret')
    local CLIENT_PERMISSIONS=$(_jq '.permissions')
    local CLIENT_MAPPERS=$(_jq '.mappers')
    if [ -z "$CLIENT_ID" ] || [ -z "$CLIENT_SECRET" ]; then
      echo "Erro: ID ou segredo do cliente não definidos"
      exit 1
    fi
    if client_exists "${REALM_NAME}" "${CLIENT_ID}"; then
      echo "O cliente ${CLIENT_ID} já existe no realm ${REALM_NAME}"
      continue
    fi
    RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json" \
      -d '{
        "clientId": "'"${CLIENT_ID}"'",
        "secret": "'"${CLIENT_SECRET}"'",
        "enabled": true,
        "directAccessGrantsEnabled": true,
        "redirectUris": ["http://localhost:8080/*"]
    }')
    if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
      echo "Erro ao criar cliente: $CLIENT_ID"
      cat response.txt
      exit 1
    fi

    # Obtendo o ID do cliente recém-criado
    CLIENT_UUID=$(curl -s -X GET "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients?clientId=${CLIENT_ID}" \
      -H "Authorization: Bearer ${TOKEN}" | jq -r '.[0].id')

    # Adicionando permissões ao cliente
    for PERMISSION in $(echo "${CLIENT_PERMISSIONS}" | jq -r '.[]'); do
      RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_UUID}/authz/resource-server/permission" \
        -H "Authorization: Bearer ${TOKEN}" \
        -H "Content-Type: application/json" \
        -d "${PERMISSION}")
      if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
        echo "Erro ao adicionar permissão ao cliente: $CLIENT_ID"
        cat response.txt
        exit 1
      fi
    done

    # Adicionando mappers ao cliente
    for MAPPER in $(echo "${CLIENT_MAPPERS}" | jq -r '.[] | @base64'); do
      local MAPPER_NAME=$(_jq '.name')
      local MAPPER_TYPE=$(_jq '.type')
      local MAPPER_CONFIG=$(_jq '.config')
      RESPONSE=$(curl -s -o response.txt -w "%{http_code}" -X POST "${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_UUID}/protocol-mappers/models" \
        -H "Authorization: Bearer ${TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{
          "name": "'"${MAPPER_NAME}"'",
          "protocol": "openid-connect",
          "protocolMapper": "'"${MAPPER_TYPE}"'",
          "config": '"${MAPPER_CONFIG}"'
      }')
      if [ "$RESPONSE" -ne 201 ] && [ "$RESPONSE" -ne 204 ]; then
        echo "Erro ao adicionar mapper ao cliente: $CLIENT_ID"
        cat response.txt
        exit 1
      fi
    done
  done
}

# Função principal para ler o JSON e executar as operações
create_from_json() {
  local JSON_FILE=$1
  local DATA=$(cat "${JSON_FILE}")
  
  local REALM_NAME=$(echo "${DATA}" | jq -r '.realm')
  if [ -z "$REALM_NAME" ]; then
    echo "Erro: Nome do realm não definido"
    exit 1
  fi
  local REALM_CONFIG=$(echo "${DATA}" | jq -c '.')
  local ROLES=$(echo "${DATA}" | jq -c '.roles.realm // empty')
  local CLIENT_ROLES=$(echo "${DATA}" | jq -c '.roles.client // empty')
  local GROUPS=$(echo "${DATA}" | jq -c '.groups // empty')
  local USERS=$(echo "${DATA}" | jq -c '.users // empty')
  local CLIENTS=$(echo "${DATA}" | jq -c '.clients // empty')

  get_access_token
  realm_exists "${REALM_NAME}"
  create_realm "${REALM_CONFIG}"
  [ -n "$ROLES" ] && create_roles "${REALM_NAME}" "${ROLES}"
  [ -n "$GROUPS" ] && create_groups "${REALM_NAME}" "${GROUPS}"
  [ -n "$USERS" ] && create_users "${REALM_NAME}" "${USERS}"
  [ -n "$CLIENTS" ] && create_clients "${REALM_NAME}" "${CLIENTS}"
}

# Chamando a função principal com o caminho do JSON
create_from_json "${JSON_FILE_PATH}"

echo "Realm, roles, groups, users, and clients created successfully from JSON."
