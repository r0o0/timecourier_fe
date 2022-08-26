FROM node:16
WORKDIR /usr/src/app

ENV NODE_ENV production

COPY . .
RUN yarn install

RUN yarn build:all


CMD ["yarn","docker-start:all"]