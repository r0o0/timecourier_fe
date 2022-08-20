FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN yarn

RUN yarn build:all

CMD ["yarn","start:all"]