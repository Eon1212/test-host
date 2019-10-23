const Discord = require("discord.js");
const superagent = require("superagent");
var fetch = require("node-fetch")

module.exports = {
    name: "meme",
    aliases: ["memes"],
    category: "fun",
    description: "Shows random memes",
    run: async (client, message, args) => {
        fetch('https://theweirdapi.glitch.me/api/meme')
        .then(res => res.json())
        .then(json => message.channel.send(json.meme));
    }
}