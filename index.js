const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const fetch = require('node-fetch');
require('dotenv').config()

const GEid = '55294077867917312'
const TestServer = '761341705365880912'
const client = new DiscordJS.Client()

client.on('ready', async() => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [GEid, TestServer],
        showWarns: false,
    })
})

client.login(process.env.TOKEN)
