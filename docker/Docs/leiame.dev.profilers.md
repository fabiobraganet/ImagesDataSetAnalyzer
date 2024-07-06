## Documentação de Inventário do Keycloak

### Informações Gerais

O Keycloak é uma solução de gerenciamento de identidade e acesso (IAM) que permite adicionar autenticação e autorização a suas aplicações. Ele suporta padrões de segurança modernos como OAuth 2.0, OpenID Connect e SAML.

### Configuração do Keycloak

#### Usuário Administrador

- **Usuário**: `admin`
- **Senha**: `admin`

#### Acesso ao Console Administrativo

- **URL**: `http://localhost:50000`

### Detalhes de Configuração

#### Realms

- **Nome do Realm**: `frontend`
- **ID do Realm**: `frontend-id`
- **Display Name**: `Frontend Realm`

#### Clientes

- **Client ID**: `frontend-client`
- **Nome**: `Frontend Client`
- **URL Raiz**: `http://localhost:5173`
- **Base URL**: `/operation`
- **Redirecionar URIs**:
  - `http://localhost:5173/operation`
  - `http://localhost:5173/*`
- **Web Origins**: `*`
- **Cliente Público**: `true`

#### Roles

**Roles Definidas**:

1. **operation**
   - `operation-basic`
   - `operation-intermediate`
   - `operation-unrestricted`
2. **administration**
   - `administration-basic`
   - `administration-intermediate`
   - `administration-unrestricted`
3. **customization**
   - `customization-basic`
   - `customization-intermediate`
   - `customization-unrestricted`
4. **management**
   - `management-basic`
   - `management-intermediate`
   - `management-unrestricted`
5. **analytical**
   - `analytical-basic`
   - `analytical-intermediate`
   - `analytical-unrestricted`

#### Usuários

**Usuários Definidos**:

1. **operation-basic**
   - **Usuário**: `operation-basic`
   - **Senha**: `password`
2. **operation-intermediate**
   - **Usuário**: `operation-intermediate`
   - **Senha**: `password`
3. **operation-unrestricted**
   - **Usuário**: `operation-unrestricted`
   - **Senha**: `password`
4. **administration-basic**
   - **Usuário**: `administration-basic`
   - **Senha**: `password`
5. **administration-intermediate**
   - **Usuário**: `administration-intermediate`
   - **Senha**: `password`
6. **administration-unrestricted**
   - **Usuário**: `administration-unrestricted`
   - **Senha**: `password`
7. **customization-basic**
   - **Usuário**: `customization-basic`
   - **Senha**: `password`
8. **customization-intermediate**
   - **Usuário**: `customization-intermediate`
   - **Senha**: `password`
9. **customization-unrestricted**
   - **Usuário**: `customization-unrestricted`
   - **Senha**: `password`
10. **management-basic**
    - **Usuário**: `management-basic`
    - **Senha**: `password`
11. **management-intermediate**
    - **Usuário**: `management-intermediate`
    - **Senha**: `password`
12. **management-unrestricted**
    - **Usuário**: `management-unrestricted`
    - **Senha**: `password`
13. **analytical-basic**
    - **Usuário**: `analytical-basic`
    - **Senha**: `password`
14. **analytical-intermediate**
    - **Usuário**: `analytical-intermediate`
    - **Senha**: `password`
15. **analytical-unrestricted**
    - **Usuário**: `analytical-unrestricted`
    - **Senha**: `password`

Essa documentação abrange os principais componentes de um realm configurado no Keycloak, fornecendo informações essenciais sobre os usuários, clientes e roles definidos. Se precisar de mais detalhes, favor acessar o console administrativo no URL fornecido.

---

Agora, se você estiver pronto para continuar, podemos documentar as informações do PostgreSQL. Por favor, confirme para seguirmos em frente.
