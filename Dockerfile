FROM node:hydrogen-alpine
WORKDIR usr/src/app
COPY . .
RUN npm ci
ENTRYPOINT ["npm","run","dev"]