import 'dotenv/config'
import Log75, { LogLevel } from 'log75'
import { Client, GatewayIntentBits, ChannelType } from 'discord.js'
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceReceiver } = require('@discordjs/voice');

export const logger = new Log75(LogLevel.Debug)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once('ready', () => {
    logger.done('Logged in')

    logger.info(`Joining channel ${process.env.TALKOVER_CHANNEL}`)
    const channel = client.channels.cache.get(process.env.TALKOVER_CHANNEL as string)
    if (!channel) {
        logger.error('Channel not found')
        process.exit()
    }

    if (channel.type != ChannelType.GuildVoice) {
        logger.error('Channel is not a guild voice channel')
        process.exit()
    }

    const track = createAudioResource('./audio.mp3')

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
    })

    const player = createAudioPlayer()
    connection.subscribe(player)

    for (let user of (process.env.TALKOVER_USERS as string).split(','))
        connection.receiver.subscribe(user)

    logger.done('Connected and subscribed to voice channel')

    player.play(track)
    player.pause()

    setInterval(() => {
        const speaking = (process.env.TALKOVER_USERS as string).split(',').find(id => connection.receiver.speaking.users.has(id))

        if (speaking) {
            player.unpause()
        } else {
            player.pause()
        }
    }, 50)
})

logger.info('Logging in')
client.login(process.env.TOKEN)
