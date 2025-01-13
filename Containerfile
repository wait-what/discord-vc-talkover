from node:20-alpine

run apk add --no-cache build-base libtool opus libsodium autoconf automake python3 ffmpeg

workdir /app

copy ./package.json /app
run yarn install

copy ./ /app 
entrypoint yarn start
