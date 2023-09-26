FROM node:alpine as development

WORKDIR /usr/src/app

COPY package.json ./

COPY tscofig.json tscofig.json

RUN npm install

COPY apps/reservations apps/reservations

COPY libs libs

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist
CMD ["node","dist/apps/reservations/main"]