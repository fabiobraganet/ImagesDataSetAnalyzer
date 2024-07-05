FROM node:22.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
