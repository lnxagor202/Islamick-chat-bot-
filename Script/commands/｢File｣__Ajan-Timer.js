const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "dailyMessage",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Modified by ChatGPT",
  description: "Sends scheduled messages with media",
  commandCategory: "system",
  usages: "auto",
  cooldowns: 0
};

module.exports.run = async function ({ api }) {
  const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false, timeZone: "Asia/Dhaka" });

  try {
    const sendToAllThreads = async (message) => {
      const threadList = global.client.allThreadID || [];
      for (const threadID of threadList) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s between messages
        api.sendMessage(message, threadID);
      }
    };

    // Message 1 - Morning with Video
    if (currentTime.includes("05:55:00")) {
      const videoUrl = "https://i.imgur.com/KC4Nh0u.mp4";
      const videoPath = __dirname + "/morning_video.mp4";
      const videoResponse = await axios.get(videoUrl, { responseType: "arraybuffer" });
      fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, "utf-8"));

      const message = {
        body: "শুভ সকাল! মনটা ভালো রাখো সারাদিন, আর কোনো চিন্তা করো না।",
        attachment: fs.createReadStream(videoPath)
      };

      await sendToAllThreads(message);
      fs.unlinkSync(videoPath);
    }

    // Message 2 - Noon with Audio
    if (currentTime.includes("12:55:00")) {
      const audioUrl = "https://i.imgur.com/05HEHuY.mp3";
      const audioPath = __dirname + "/noon_audio.mp3";
      const audioResponse = await axios.get(audioUrl, { responseType: "arraybuffer" });
      fs.writeFileSync(audioPath, Buffer.from(audioResponse.data, "utf-8"));

      const message = {
        body: "দুপুর হয়ে গেছে! খেয়েছো তো? যদি না খেয়ে থাকো, আগে খাও।",
        attachment: fs.createReadStream(audioPath)
      };

      await sendToAllThreads(message);
      fs.unlinkSync(audioPath);
    }

    // Message 3 - Night Message Only
    if (currentTime.includes("20:59:00")) {
      const message = {
        body: "রাত হয়ে গেছে! এখন একটু বিশ্রাম নাও। শরীরের যত্ন নাও, ঘুমিয়ে পড়ার আগে নিজেকে ভালোবাসো।"
      };

      await sendToAllThreads(message);
    }

  } catch (error) {
    console.error("Error in dailyMessage:", error);
  }
};
