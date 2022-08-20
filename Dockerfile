FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN yarn install

RUN yarn build:all

EXPOSE 9090

CMD ["yarn","docker-start:all"]