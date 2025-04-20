module.exports.config = {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ariyan Naima",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
  
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a)
      { api.sendMessage(a, event.threadID); }
a("♻️𝕆𝕨𝕟𝕖𝕣 𝕀𝕟𝕗𝕠♻️\n\n\
 𝗟𝗡.𝗫𝗔𝗚𝗢𝗥 😎 \n\n𝐀𝐠𝐞 : 21\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 :  (TANHA)\n\n𝐅𝐫𝐨𝐦 : 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝\n\n𝐒𝐭𝐮𝐝𝐲 : \n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : \n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :https://www.facebook.com/ln.sagor.5?mibextid=2JQ9oc \n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 2: https://www.facebook.com/profile.php?id=100089275613682\n\n𝗪𝗵𝗮𝘁'𝘀 𝗔𝗽𝗽 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 : 01620459281\n\n ❤😌\n\n🌺");


}