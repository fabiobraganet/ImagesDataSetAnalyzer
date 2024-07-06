#!/bin/bash

chmod +x start.sh
chmod +x docker/Keycloak/create_realm.sh

# Verifica se o Docker Compose está instalado
if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

# Para todos os contêineres em execução
echo "Parando todos os contêineres em execução..."
docker-compose down

# Construir as imagens do Docker
echo "Construindo as imagens do Docker..."
docker-compose build

# Subir os contêineres do Docker
echo "Subindo os contêineres do Docker..."
docker-compose up -d

# Função para configurar o realm
configure_realm() {
  until $(curl --output /dev/null --silent --head --fail http://localhost:50000); do
    echo "Esperando pelo Keycloak..."
    sleep 5
  done
  echo "Configurando o realm..."
  docker/Keycloak/create_realm.sh docker/Keycloak/realm-export.json
}

# Executar a função configure_realm em background
configure_realm &

# Exibir os logs dos contêineres
echo "Exibindo os logs dos contêineres..."
docker-compose logs -f
