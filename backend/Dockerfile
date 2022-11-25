FROM node:16.10.0-alpine

WORKDIR /home/node/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start:dev" ]
