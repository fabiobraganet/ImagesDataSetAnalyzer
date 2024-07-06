## Endpoints de Gerenciamento do Keycloak

### Introdução

Keycloak fornece uma API RESTful poderosa que permite a administração completa dos realms, usuários, clientes, roles e outros componentes. Este documento descreve os principais endpoints para gerenciar realms e seus subitens.

### Endpoints de Realms

#### Listar Realms

- **GET** `/admin/realms`
  - Retorna a lista de todos os realms.

#### Criar um Realm

- **POST** `/admin/realms`
  - Cria um novo realm.
  - **Corpo da Requisição**:
    ```json
    {
      "realm": "example-realm",
      "enabled": true
    }
    ```

#### Obter um Realm

- **GET** `/admin/realms/{realm}`
  - Retorna a configuração de um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.

#### Atualizar um Realm

- **PUT** `/admin/realms/{realm}`
  - Atualiza a configuração de um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
  - **Corpo da Requisição**:
    ```json
    {
      "realm": "example-realm",
      "enabled": true
    }
    ```

#### Deletar um Realm

- **DELETE** `/admin/realms/{realm}`
  - Remove um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.

### Endpoints de Clientes

#### Listar Clientes

- **GET** `/admin/realms/{realm}/clients`
  - Retorna a lista de clientes para um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.

#### Criar um Cliente

- **POST** `/admin/realms/{realm}/clients`
  - Cria um novo cliente.
  - **Parâmetros**:
    - `realm`: Nome do realm.
  - **Corpo da Requisição**:
    ```json
    {
      "clientId": "example-client",
      "enabled": true
    }
    ```

#### Obter um Cliente

- **GET** `/admin/realms/{realm}/clients/{clientId}`
  - Retorna a configuração de um cliente específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `clientId`: ID do cliente.

#### Atualizar um Cliente

- **PUT** `/admin/realms/{realm}/clients/{clientId}`
  - Atualiza a configuração de um cliente específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `clientId`: ID do cliente.
  - **Corpo da Requisição**:
    ```json
    {
      "clientId": "example-client",
      "enabled": true
    }
    ```

#### Deletar um Cliente

- **DELETE** `/admin/realms/{realm}/clients/{clientId}`
  - Remove um cliente específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `clientId`: ID do cliente.

### Endpoints de Roles

#### Listar Roles

- **GET** `/admin/realms/{realm}/roles`
  - Retorna a lista de roles para um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.

#### Criar uma Role

- **POST** `/admin/realms/{realm}/roles`
  - Cria uma nova role.
  - **Parâmetros**:
    - `realm`: Nome do realm.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "example-role"
    }
    ```

#### Obter uma Role

- **GET** `/admin/realms/{realm}/roles/{roleName}`
  - Retorna a configuração de uma role específica.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `roleName`: Nome da role.

#### Atualizar uma Role

- **PUT** `/admin/realms/{realm}/roles/{roleName}`
  - Atualiza a configuração de uma role específica.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `roleName`: Nome da role.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "example-role"
    }
    ```

#### Deletar uma Role

- **DELETE** `/admin/realms/{realm}/roles/{roleName}`
  - Remove uma role específica.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `roleName`: Nome da role.

### Endpoints de Usuários

#### Listar Usuários

- **GET** `/admin/realms/{realm}/users`
  - Retorna a lista de usuários para um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.

#### Criar um Usuário

- **POST** `/admin/realms/{realm}/users`
  - Cria um novo usuário.
  - **Parâmetros**:
    - `realm`: Nome do realm.
  - **Corpo da Requisição**:
    ```json
    {
      "username": "example-user",
      "enabled": true,
      "credentials": [
        {
          "type": "password",
          "value": "password",
          "temporary": false
        }
      ]
    }
    ```

#### Obter um Usuário

- **GET** `/admin/realms/{realm}/users/{userId}`
  - Retorna a configuração de um usuário específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `userId`: ID do usuário.

#### Atualizar um Usuário

- **PUT** `/admin/realms/{realm}/users/{userId}`
  - Atualiza a configuração de um usuário específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `userId`: ID do usuário.
  - **Corpo da Requisição**:
    ```json
    {
      "username": "example-user",
      "enabled": true
    }
    ```

#### Deletar um Usuário

- **DELETE** `/admin/realms/{realm}/users/{userId}`
  - Remove um usuário específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `userId`: ID do usuário.

### Endpoints de Grupos

#### Listar Grupos

- **GET** `/admin/realms/{realm}/groups`
  - Retorna a lista de grupos para um realm específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.

#### Criar um Grupo

- **POST** `/admin/realms/{realm}/groups`
  - Cria um novo grupo.
  - **Parâmetros**:
    - `realm`: Nome do realm.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "example-group"
    }
    ```

#### Obter um Grupo

- **GET** `/admin/realms/{realm}/groups/{groupId}`
  - Retorna a configuração de um grupo específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `groupId`: ID do grupo.

#### Atualizar um Grupo

- **PUT** `/admin/realms/{realm}/groups/{groupId}`
  - Atualiza a configuração de um grupo específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `groupId`: ID do grupo.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "example-group"
    }
    ```

#### Deletar um Grupo

- **DELETE** `/admin/realms/{realm}/groups/{groupId}`
  - Remove um grupo específico.
  - **Parâmetros**:
    - `realm`: Nome do realm.
    - `groupId`: ID do grupo.

### Conclusão

A API de administração do Keycloak oferece uma forma robusta e flexível de gerenciar realms e seus componentes. Usando esses endpoints, você pode automatizar a criação, atualização e exclusão de realms, clientes, roles, usuários e grupos, facilitando a administração de suas soluções de identidade e acesso. Para mais detalhes e opções avançadas, consulte a [documentação oficial do Keycloak](https://www.keycloak.org/docs-api/25.0/rest-api/index.html).
