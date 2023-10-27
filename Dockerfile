# Dockerfile
FROM node:20.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]

EXPOSE 3001
