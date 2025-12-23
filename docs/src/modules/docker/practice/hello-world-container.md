## Hello world

### Task

Create simple application with frontend and api (should have 1 endpoint, which returns `Hello world!`)

- Create Docker file in the root directory of your project
- Create `docker-compose.yml` file and define needed services
- Run your project with Docker

Code base: https://github.com/booobryyyk/se_roadmap/blob/main/tasks/docker-os

API Dockerfile:

```Dockerfile
FROM node:24-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM node:24-alpine as runner

COPY --from=base /app .

EXPOSE 3000

CMD ["npm", "start"]
```

Frontend Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY --chmod=644 nginx.conf /etc/nginx/conf.d/default.conf
COPY --chmod=644 index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

Docker compose:

```yml
version: '3.8'

services:
  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    container_name: api
    restart: unless-stopped
    ports:
      - '3000:3000'
    environment:
      - PORT=3000

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: frontend
    restart: unless-stopped
    ports:
      - '8080:80'
    depends_on:
      - api
```
