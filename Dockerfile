FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY index.js index.js

EXPOSE 8080
CMD [ "node", "index.js" ]