# Discord VC Talk-over
A Discord bot that talks over specified users in a voice channel.

## Dependencies
- Node.js
- Yarn
- Git (optional)

### Build tools
If you get errors while yarn builds the packages, you might need to install build tools and/or update Node.js.

- Windows: Visual Studio 2015/2017
- Debian-based: `apt-get install build-essential`
- Arch-based: `pacman -Sy base-devel`

## Running
- Clone the project
```
git clone https://github.com/wait-what/discord-vc-talkover
cd discord-vc-talkover
```
- Install dependencies
```
yarn install
```
- Rename `example.env` to `.env`
- Set the appropriate values
- Place `audio.mp3` into the folder (where .env, LICENSE and README is)
    > NOTE: The audio file has to be LONG. It doesn't restart when it ends, it just pauses/unpauses.
- Start the bot
```
yarn start
```

## License
This project is licensed under the [MIT license](./LICENSE).