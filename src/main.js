//dotenvの適用
require('dotenv').config();
//.envからtokenの呼び出し
const token = process.env.TOKEN;
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions]
});

//起動確認
client.once('ready', () => {
    console.log(`${client.user.tag} Ready`);
});

//メッセージリアクションbot
client.on('messageReactionAdd', (reaction, user) => {
    //リアクションを出す場合の条件(必要なければ削除しても問題ないです。)こちらは3つの特定のテキストチャンネルのテキストにリアクションがあった時の処理になってます。
    if(reaction.message.channelId==`チャンネルID` || reaction.message.channelId==`チャンネルID` || reaction.message.channelId==`チャンネルID`){
        console.log(`${reaction.message.author.tag}さんへ${user.tag}さんからリアクションが来てるよ`);
        //リアクションが来た時に特定のテキストチャンネルにメッセージを送る処理
        reaction.message.guild.channels.cache.get(`チャンネルID`).send(`${reaction.message.author}さんへ${user}さんからリアクションが来てるよ`);
    }
})

//Discordへの接続
client.login(token);