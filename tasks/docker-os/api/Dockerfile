FROM node:24-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM node:24-alpine as runner

COPY --from=base /app .

EXPOSE 3000

CMD ["npm", "start"]
