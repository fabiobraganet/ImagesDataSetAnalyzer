# Configuração de Ambiente de Desenvolvimento com Vite e Nginx

Este guia fornece instruções sobre como configurar um ambiente de desenvolvimento local usando Vite para projetos React e Nginx para redirecionar subdomínios para portas específicas. Esta configuração permite o desenvolvimento e teste de aplicações React em subdomínios específicos, simulando ambientes de produção.

## Pré-requisitos

- Node.js instalado (recomenda-se a última versão LTS)
- Nginx instalado no sistema local
- Acesso ao terminal com privilégios de superusuário para configuração do Nginx

## Passo 1: Criar um Novo Projeto React com Vite

1. **Criar Projeto**

   Utilize o comando `npm` para criar um novo projeto React com Vite:

   ```bash
   npm init vite@latest meu-app -- --template react
   ```

   Entre no diretório do projeto:

   ```bash
   cd meu-app
   ```

2. **Instalar Dependências**

   Instale as dependências necessárias usando `npm`:

   ```bash
   npm install
   ```

## Passo 2: Configurar o Servidor de Desenvolvimento Vite

1. **Configuração do Vite**

   Abra ou crie o arquivo `vite.config.js` e configure o servidor para usar uma porta específica, por exemplo, 3000:

   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     server: {
       port: 3000, // Define a porta que o servidor do Vite deve usar
       strictPort: true, // Garante que o Vite só inicie se a porta estiver disponível
       hmr: {
         protocol: 'ws',
         host: 'localhost',
       },
     },
   });
   ```

2. **Iniciar o Servidor de Desenvolvimento**

   Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Passo 3: Configurar o Nginx para Redirecionar Subdomínios para Portas Específicas

1. **Configurar o Nginx**

   Edite o arquivo de configuração para o Nginx localizado em `/etc/nginx/sites-available`. Você pode criar um novo arquivo para essa configuração:

   ```bash
   sudo nano /etc/nginx/sites-available/produto.dev
   ```

   Adicione a seguinte configuração para redirecionar o subdomínio `teste2.produto.dev` para `localhost:3000`:

   ```nginx

    server {
        listen 80;
        server_name sec.produto.dev;  # Para o Keycloak

        location / {
            proxy_pass http://127.0.0.1:50000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

   server {
       listen 80;
       server_name *.produto.dev;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }

   ```

   Ative a configuração criando um link simbólico para `sites-enabled`:

   ```bash
   sudo ln -s /etc/nginx/sites-available/produto.dev /etc/nginx/sites-enabled/
   ```

2. **Reiniciar o Nginx**

   Teste a configuração do Nginx para erros e reinicie o serviço:

   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

## Passo 4: Acessar a Aplicação

Acesse `http://teste2.produto.dev` em seu navegador. O tráfego será redirecionado pelo Nginx para o servidor de desenvolvimento do Vite rodando na porta 3000, permitindo que você visualize e teste sua aplicação React.

## Conclusão

Este guia ajuda a configurar um ambiente de desenvolvimento robusto para aplicações React com Vite, utilizando o Nginx para gerenciar subdomínios e redirecionamentos de portas. Isso facilita o desenvolvimento de múltiplas partes de uma aplicação

simultaneamente em um ambiente que simula mais de perto o ambiente de produção.
