FROM node:lts-alpine3.23 AS frontend

WORKDIR /app

COPY package*.json ./

RUN npm install || true

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
