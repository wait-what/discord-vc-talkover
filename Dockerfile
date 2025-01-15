from docker.io/node:23-alpine

run apk add --no-cache build-base libtool opus libsodium autoconf automake python3 ffmpeg

workdir /app

copy ./package.json ./yarn.lock /app
run yarn install

copy ./ /app 
run yarn build

entrypoint ["yarn", "start"]
