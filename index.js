const Discord = require("discord.js");
const axios = require('axios').default;
var setTitle = require('console-title');
const readline = require("readline")
var center = require('center-align');
var colors = require("colors")
const notifier = require('node-notifier');

const client = new Discord.Client();
const {token} = require("./token-here.json");
    var sniped = 0
    client.on("ready", async() => {
	setTitle("Nitro Sniper | Sniped: 0");
	console.log(" ");
	console.log(" ");
	console.log(center(`              ╔═╗  ╔╗╔  ╦  ╦═╗  ╦═╗  ╦═╗`.yellow, 112));
	console.log(center(`              ╚═╗  ║║║  ║  ╠═╝  ║╣   ╠╦╝`.gray, 112));
    console.log(center(`              ╚═╝  ╝╚╝  ╩  ╩    ╩═╝  ╩╚═`.white, 112));
    console.log(center(`
    ╦════════════════════════╦
    ║                        ║
    ║   Fast Nitro Sniper.   ║
    ║    Made by lnx#0069    ║
    ║                        ║
    ╩════════════════════════╩
    `.yellow, 112));

console.log(" ");
console.log(" ");
console.log(" ");
 });

client.on('message', async message => {
    function getDateTime() {

        var date = new Date();
    
        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
    
        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
    
        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
    
    
        return hour + ":" + min + ":" + sec;
    
    }
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {
        var start = new Date()

        if(message.channel.type == "dm") {
            var bruh = "DM" 
         } else {
            var bruh = message.guild.name
         }

        var gift = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        var link = gift.exec(message.content);
        if(!link) return;
        var gcode = link[0].split('/')[1];

        console.log(`${getDateTime()} | Unknown Nitro code Sniped! | ${message.content}`.yellow);
        console.log(`Server: ${bruh}`);
        console.log(`Author: ${message.author.tag}`);
        console.log(`Author ID: ${message.author.id}`);
        var time = new Date() - start
        console.log(`Elapsed: ${time}ms`);
        console.log(` `);
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${gcode}/redeem`, 
            headers: 
            {
            'Authorization': client.token 
            }
        }).then(
            () => {console.log(`Succesfully claimed Nitro! | ${bruh} | ${message.content}`.brightGreen);
                    var sniped = sniped + 1
                    setTitle(`Nitro Sniper | Sniped: ${sniped}`);
                }
        ).catch(ex => console.log(`Invalid Discord Nitro Code!`.red))
    }
})
client.login(token)