"use strict";

require('dotenv').config();

const PREFIX = '$';

const { Client, Intents, CommandInteractionOptionResolver } = require('discord.js');
const PUBG_Session = require('./pubg_session');
const { env } = require('process');
const keepAlive = require('./server.js');

const client = new Client( { intents: ["GUILDS", "GUILD_MESSAGES"] } );

const pubg_Session = new PUBG_Session();

client.once('ready', () => {
    console.log(`${client.user.username} has logged into discord`);
});

client.on('messageCreate', (message) => {
    // ignore bot messages
    if(message.author.bot === true) return;
    
    if(message.content.startsWith(PREFIX)) {
        parseCommands(message);
    }
});

function parseCommands(message) {
    const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
    if(CMD_NAME.toUpperCase() === 'HELP') {
      let helpMessage = '**$jump <mapname>**' +
                        '\n Generates new drop information' +
                        '\n   _<mapname> = Erangel, Miramar, Sanhok, Vikendi, Karakin, Taego_';
      message.channel.send(helpMessage);
    } else if(CMD_NAME.toUpperCase() === 'INFO') {
      message.channel.send(`Currently in ${client.guilds.cache.size} servers`);
    } else if(CMD_NAME.toUpperCase() === 'JUMP') {
        console.log(`${message.member.user.tag}: getting drop point for map ${args[0]}`);
        
        let result = pubg_Session.getNewSessionData(args[0]);
        message.channel.send(result);
    } else {
        console.log('command not recognized');
    }
}

keepAlive();
client.login(process.env['DISCORD_API_TOKEN']);