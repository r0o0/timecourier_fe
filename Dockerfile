FROM node:16
WORKDIR /usr/src/app

COPY . .
RUN yarn install
RUN yarn build:all

RUN cd packages/components && yarn start-storybook -p 9009 

CMD ["yarn","docker-start:all"]