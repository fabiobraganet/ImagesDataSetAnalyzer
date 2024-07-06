### Guia de Atributos para Configuração de Realms no Keycloak

Este guia fornece uma descrição detalhada dos atributos utilizados nos arquivos JSON para configurar realms no Keycloak. Cada realm pode ser configurado usando um arquivo JSON que especifica suas propriedades, roles, usuários e clientes.

### Estrutura Básica do Arquivo JSON

Cada arquivo JSON representa um realm completo e deve conter as seguintes seções principais: `realm`, `roles`, `users`, e `clients`.

```json
{
  "realm": "example-realm",
  "enabled": true,
  "id": "example-realm-id",
  "displayName": "Example Realm",
  "roles": {
    "realm": []
  },
  "users": [],
  "clients": []
}
```

### Atributos de `realm`

- **realm**: (String) O nome do realm. Este nome deve ser único e é usado para identificar o realm no Keycloak.
- **enabled**: (Boolean) Indica se o realm está habilitado. Use `true` para habilitar e `false` para desabilitar.
- **id**: (String) Um identificador único para o realm. Geralmente, é igual ao nome do realm.
- **displayName**: (String) Um nome amigável para exibição do realm.

### Atributos de `roles`

Os roles são agrupados sob a chave `roles` e definidos em uma lista sob a chave `realm`.

#### Estrutura de `roles`

```json
"roles": {
  "realm": [
    { "name": "role-name" }
  ]
}
```

#### Atributos de `role`

- **name**: (String) O nome do role. Deve ser único dentro do realm.

### Atributos de `users`

Os usuários são definidos em uma lista sob a chave `users`.

#### Estrutura de `users`

```json
"users": [
  {
    "username": "user-name",
    "enabled": true,
    "credentials": [
      {
        "type": "password",
        "value": "user-password",
        "temporary": false
      }
    ]
  }
]
```

#### Atributos de `user`

- **username**: (String) O nome de usuário. Deve ser único dentro do realm.
- **enabled**: (Boolean) Indica se o usuário está habilitado. Use `true` para habilitar e `false` para desabilitar.
- **credentials**: (Array) Lista de credenciais do usuário.
  - **type**: (String) O tipo de credencial. Para senhas, use `"password"`.
  - **value**: (String) O valor da credencial. Para senhas, este é o valor da senha.
  - **temporary**: (Boolean) Indica se a senha é temporária. Use `false` para senhas permanentes.

### Atributos de `clients`

Os clientes são definidos em uma lista sob a chave `clients`.

#### Estrutura de `clients`

```json
"clients": [
  {
    "clientId": "client-id",
    "name": "Client Name",
    "rootUrl": "http://localhost:5173",
    "baseUrl": "/operation",
    "surrogateAuthRequired": false,
    "enabled": true,
    "alwaysDisplayInConsole": false,
    "clientAuthenticatorType": "client-secret",
    "redirectUris": [
      "http://localhost:5173/operation",
      "http://localhost:5173/*"
    ],
    "webOrigins": [
      "*"
    ],
    "notBefore": 0,
    "bearerOnly": false,
    "consentRequired": false,
    "standardFlowEnabled": true,
    "implicitFlowEnabled": true,
    "directAccessGrantsEnabled": true,
    "serviceAccountsEnabled": false,
    "publicClient": true,
    "frontchannelLogout": false,
    "protocol": "openid-connect",
    "attributes": {
      "post.logout.redirect.uris": "+",
      "pkce.code.challenge.method": "S256"
    },
    "authenticationFlowBindingOverrides": {},
    "fullScopeAllowed": true,
    "nodeReRegistrationTimeout": -1,
    "defaultClientScopes": [
      "web-origins",
      "profile",
      "roles",
      "email"
    ],
    "optionalClientScopes": [
      "address",
      "phone",
      "offline_access"
    ],
    "access": {
      "view": true,
      "configure": true,
      "manage": true
    }
  }
]
```

#### Atributos de `client`

- **clientId**: (String) O identificador único do cliente. Deve ser único dentro do realm.
- **name**: (String) O nome do cliente.
- **rootUrl**: (String) A URL raiz do cliente.
- **baseUrl**: (String) A URL base do cliente.
- **surrogateAuthRequired**: (Boolean) Indica se a autenticação substituta é necessária.
- **enabled**: (Boolean) Indica se o cliente está habilitado. Use `true` para habilitar e `false` para desabilitar.
- **alwaysDisplayInConsole**: (Boolean) Indica se o cliente deve ser sempre exibido no console.
- **clientAuthenticatorType**: (String) O tipo de autenticação do cliente. Exemplo: `"client-secret"`.
- **redirectUris**: (Array) Lista de URIs de redirecionamento permitidas para o cliente.
- **webOrigins**: (Array) Lista de origens web permitidas para o cliente.
- **notBefore**: (Integer) Marca de tempo antes da qual tokens emitidos para este cliente não são válidos.
- **bearerOnly**: (Boolean) Indica se o cliente é apenas portador.
- **consentRequired**: (Boolean) Indica se é necessário consentimento para este cliente.
- **standardFlowEnabled**: (Boolean) Habilita o fluxo padrão de autenticação.
- **implicitFlowEnabled**: (Boolean) Habilita o fluxo implícito de autenticação.
- **directAccessGrantsEnabled**: (Boolean) Habilita concessões de acesso direto.
- **serviceAccountsEnabled**: (Boolean) Habilita contas de serviço para o cliente.
- **publicClient**: (Boolean) Indica se o cliente é público.
- **frontchannelLogout**: (Boolean) Habilita logout de frontchannel.
- **protocol**: (String) O protocolo usado pelo cliente. Exemplo: `"openid-connect"`.
- **attributes**: (Object) Atributos adicionais do cliente.
  - **post.logout.redirect.uris**: (String) URIs de redirecionamento após logout.
  - **pkce.code.challenge.method**: (String) Método de desafio de código PKCE. Exemplo: `"S256"`.
- **authenticationFlowBindingOverrides**: (Object) Substituições de fluxo de autenticação.
- **fullScopeAllowed**: (Boolean) Indica se o cliente tem acesso total ao escopo.
- **nodeReRegistrationTimeout**: (Integer) Tempo limite para re-registro de nó.
- **defaultClientScopes**: (Array) Lista de escopos padrão do cliente.
- **optionalClientScopes**: (Array) Lista de escopos opcionais do cliente.
- **access**: (Object) Configurações de acesso do cliente.
  - **view**: (Boolean) Permissão de visualização.
  - **configure**: (Boolean) Permissão de configuração.
  - **manage**: (Boolean) Permissão de gerenciamento.

### Exemplo Completo de Arquivo JSON

Aqui está um exemplo completo de um arquivo JSON para criar um realm chamado `frontend`:

```json
{
  "realm": "frontend",
  "enabled": true,
  "id": "frontend-id",
  "displayName": "Frontend Realm",
  "roles": {
    "realm": [
      { "name": "operation-basic" },
      { "name": "operation-intermediate" },
      { "name": "operation-unrestricted" },
      { "name": "administration-basic" },
      { "name": "administration-intermediate" },
      { "name": "administration-unrestricted" },
      { "name": "customization-basic" },
      { "name": "customization-intermediate" },
      { "name": "customization-unrestricted" },
      { "name": "management-basic" },
      { "name": "management-intermediate" },
      { "name": "management-unrestricted" },
      { "name": "analytical-basic" },
      { "name": "analytical-intermediate" },
      { "name": "analytical-unrestricted" }
    ]
  },
  "users": [
    {
      "username": "operation-basic",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "operation-intermediate",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "operation-unrestricted",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "administration-basic",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "administration-intermediate",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "administration-unrestricted",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "customization-basic",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "customization-intermediate",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "customization-unrestricted",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "management-basic",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "management-intermediate",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "management-unrestricted",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "analytical-basic",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "analytical-intermediate",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    },
    {
      "username": "analytical-unrestricted",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "password", "temporary": false }
      ]
    }
  ],
  "clients": [
    {
      "clientId": "frontend-client",
      "name": "Frontend Client",
      "rootUrl": "http://localhost:5173",
      "baseUrl": "/operation",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [
        "http://localhost:5173/operation",
        "http://localhost:5173/*"
      ],
      "webOrigins": ["*"],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": true,
      "directAccessGrantsEnabled": true,
      "serviceAccountsEnabled": false,
      "publicClient": true,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {
        "post.logout.redirect.uris": "+",
        "pkce.code.challenge.method": "S256"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": true,
      "nodeReRegistrationTimeout": -1,
      "defaultClientScopes": ["web-origins", "profile", "roles", "email"],
      "optionalClientScopes": ["address", "phone", "offline_access"],
      "access": {
        "view": true,
        "configure": true,
        "manage": true
      }
    }
  ]
}
```

### Executando o Script

Depois de criar os arquivos JSON na pasta `export`, execute o script `configure-realms.sh` para importar os realms e mover os arquivos JSON para a pasta `executed`.

```bash
./configure-realms.sh
```

Isso deve configurar corretamente os realms no Keycloak conforme definido nos arquivos JSON. Se houver algum problema, verifique os logs para mensagens de erro e ajuste conforme necessário.
