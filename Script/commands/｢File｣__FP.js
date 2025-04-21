const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "fp",
  version: "1.1",
  credits: "Modified by ChatGPT",
  countDown: 5,
  hasPermssion: 0,
  description: "Send the profile picture of a Facebook user",
  commandCategory: "utility",
  usages: "{pn} @tag | reply | uid",
};

module.exports.run = async function({ event, api, args }) {
  const { threadID, messageID, messageReply, senderID, mentions } = event;

  const getProfilePicture = async (uid) => {
    return `https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
  };

  let uid;

  try {
    if (event.type === "message_reply") {
      uid = messageReply.senderID;
    } else if (args.join(" ").includes("facebook.com")) {
      const match = args.join(" ").match(/(\d+)/);
      if (match) {
        uid = match[0];
      } else {
        throw new Error("Invalid Facebook URL or profile ID");
      }
    } else if (Object.keys(mentions).length > 0) {
      uid = Object.keys(mentions)[0];
    } else if (args[0]) {
      uid = args[0];
    } else {
      uid = senderID;
    }

    const imageUrl = await getProfilePicture(uid);
    const response = await axios.get(imageUrl, { responseType: "stream" });

    api.sendMessage({
      body: '',
      attachment: response.data
    }, threadID, messageID);

  } catch (err) {
    api.sendMessage(`⚠ Error: ${err.message}`, threadID, messageID);
  }
};
