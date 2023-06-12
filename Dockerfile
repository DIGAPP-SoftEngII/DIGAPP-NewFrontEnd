# Comente y descomente dependiendo de lo que necesite


## Dockerfile para desarollo

FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start


## Dockerfil para despliegue
