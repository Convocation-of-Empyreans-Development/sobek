const fs = require("fs");
const Discord = require("discord.js");

function read_config(filename) {
    let file = fs.readFileSync(filename);
    return JSON.parse(file);
}

// generate_join_url takes a Discord client ID and a permissions number.
// The function returns the URL the bot administrator should use to allow the bot to join a server.
function generate_join_url(client_id, permissions) {
    console.log(`https://discordapp.com/api/oauth2/authorize?client_id=${client_id}&scope=bot&permissions=${permissions}`);
}

let config = read_config("./server/bot/config.json");

const client = new Discord.Client();

// The Discord client should receive a ready event when the bot has successfully logged in.
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

// Log in using the bot token received in the config file.
client.login(config.discord.bot_token)
