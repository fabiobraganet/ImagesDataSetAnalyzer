# docker/Frontend/Dockerfile
FROM node:22.4.0

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY ../../package.json ../../package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do frontend para o diretório de trabalho
COPY ../../public ./public
COPY ../../src ./src
COPY ../../index.html ./index.html
COPY ../../vite.config.ts ./vite.config.ts

# Construir o aplicativo
RUN npm run build

# Expor a porta que a aplicação irá rodar
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
