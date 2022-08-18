FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN yarn install --network-timeout 1000000 --frozen-lockfile

RUN yarn build

CMD ["yarn","start"]