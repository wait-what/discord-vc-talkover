# Discord VC Talk-over
A Discord bot that talks over specified users in a voice channel

## Running
- Install `docker` and `docker-compose`
- Clone the project
```
git clone https://github.com/wait-what/discord-vc-talkover
cd discord-vc-talkover
```
- Copy `example_config.env` to `config.env`
- Set the appropriate values
  - `TOKEN` is your Discord bot token
  - `TALKOVER_CHANNEL` is the ID of the voice channel you want it to work in
  - `TALKOVER_USERS` is a list of IDs of users that you want it to annoy
- Place `audio.mp3` into this folder
    > NOTE: The audio file has to be LONG. It doesn't loop when it ends, it just pauses/unpauses, because I couldn't be bothered.
- Start the bot
  ```
  docker-compose up
  ```
  > or `docker-compose up -d` to run it in the background, then `docker-compose down` to stop

## License
This project is licensed under the [MIT license](./LICENSE).
