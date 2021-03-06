const Discord = require("discord.js");
const giveaways = require("discord-giveaway");
const ms = require("ms");
module.exports = {
    name: "giveawaydelete",
    aliases: ["gdelete"],
    category: "giveaways",
    description: "Deletes a giveaway",
    run: async (client, message, args) => {
        let messageID = args[0];
        giveaways.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
}