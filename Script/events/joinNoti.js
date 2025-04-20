module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱",
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinmp4");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinmp4", "join.mp4");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{  ${global.config.PREFIX}  } ${(!global.config.BOTNAME) ? "LN.XAGOR(✷‿✷) 𝗕𝗼𝘁 𝗜𝘀 𝗕𝗮𝗰𝗸👿" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
return api.sendMessage(`» ✅𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗                                            ╔════   °°𝗟𝗡.𝗫𝗔𝗚𝗢𝗥°°    ════╗          𝐖𝐄𝐋𝐂𝐎𝐌𝐄 TO BOT ENJOY 𝐈𝐓✅            ╚═══   °𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟°    ═══╝                .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      ·     . · *           . ·   .       * ·       . ✧           .  .          .               .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      ·     . · *           . ·   .       * ·       . ✧           .  .          . .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      ·     . · *           . ·   .       * ·       . ✧           .  .          . .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      ·     . · *           . ·   .       * ·       . ✧           .  .          . .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      ·     . · *           . ·   .       * ·       . ✧           .  .          .  .       .   *  .·       ✧ •  .            • ✦  . ·   •  .      . *                                                      ·     . · *           . ·   .       * ·       . ✧           .  .          ★~★~★~★~★~★~★~★~★~★~★ •╔════◄░❀░❉░░►════╗•            ❉░ 👉 USE PERFIX / 👈░❉ •╚════◄░❀░❉░░►════╝• ★~★~★~★~★~★~★~★~★~★~★     »✅╭──《 𝗕𝗢𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗──⊷
│ ╭───────✧❁✧───────«
│ │ Bot Name:- 混合说唱
│ │ Credit :-LN.XAGOR
│ │ Prefix:- [/]
│ │ Owner :LN.XAGOR.
│ │ LN.XAGOR OFFICIAL:-"https://www.facebook.com/www.xnxx.com20
│ │ 
╰──────✧❁✧───────»
╰───────⊷☑ ❀✿💕🌼💕✿❀                    ✿❀¸¸.•*¯✿¸.• ❀✿💕🌼💕✿❀ ✿❀¸¸.•*¯✿¸.•                  ★ 。☆。★ 。☆。
-\`, {${global.config.PREFIX}𝗛𝗲𝗹𝗽} to see command`, threadID);
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("『DD/MM/YYYY』 ||【hh:mm:ss】"); 
const hours = moment.tz("Asia/Dhaka").format("hh");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             [   {name} ]\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🥰🖤🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🥀\n\n         🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n╔╦══•  •✠•❀•✠•  •══╦╗\n♥  𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑♥\n\n            ☟                     \n\n   🥰𝗟𝗡.𝗫𝗔𝗚𝗢𝗥🤍\n╚╩══•  •✠•❀•✠•  •══╩\n{time}": msg = threadData.customJoin;
			msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? 'আপনাদের' : '༄✺আ্ঁপ্ঁনা্ঁকে')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "সকাল" : 
    hours > 10 && hours <= 12 ? "দুপুর" :
    hours > 12 && hours <= 18 ? "বিকাল" : "রাত্রি")
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                                }
