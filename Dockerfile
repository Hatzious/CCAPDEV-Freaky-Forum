FROM node:lts-alpine3.23 AS frontend

RUN apk add --no-cache git github-cli

WORKDIR /app

COPY package*.json ./

RUN npm install || true

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
