"use strict";

require('dotenv').config();

const { Client, Intents } = require('discord.js');

const PUBG_Session = require('./pubg_session');

const client = new Client( { intents: ["GUILDS", "GUILD_MESSAGES"] } );
const pubg_Session = new PUBG_Session();

client.once('ready', () => {
    console.log(`${client.user.username} has logged in`);
});

client.on('messageCreate', (message) => {
    console.log(`${message.content} has been received`);
    
    if(message.content.toUpperCase() === '-NEW LOADOUT') {
        pubg_Session.startNewSession();
        message.reply(pubg_Session.printsession());
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);