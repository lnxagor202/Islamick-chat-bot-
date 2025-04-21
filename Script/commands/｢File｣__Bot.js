const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone");

module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, Threads, Users }) {
  const { threadID, messageID } = event;
  const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L");
  const id = event.senderID;
  const name = await Users.getNameUser(id);

  const responses = [
    "বেশি bot Bot করলে leave নিবো কিন্তু😒😒",
    "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
    "আমি আবাল দের সাথে কথা বলি না,ok😒",
    "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
    "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
    "তোকে দিয়ে কিছুই হবেনা😒",
    "কি😒,এই টাইমে ঘুমাই না আবার😑",
    "তুমি একটা পাঁঠা🐐",
    "মাথা ঠিক আছে তোর?🙄",
    "বালের জিনিস একটা😡",
    "হ্যা রে বল😘",
    "এই মাত্র ঘুম থেকে উঠলাম😴",
    "আমার সাথে প্রেম করবি?🥺",
    "তোকে অনেক ভালোবাসি জানিস?❤️",
    "আজকে কিছু ভালো লাগছে না😞",
    "তুই পাগল নাকি?🙃",
    "এই কথাটা আর বলিস না😒",
    "তুই কি আমাকে অপমান করলি?😢",
    "তুই তো দেখি একদমই বদলায়নি😒",
    "আমার খুব কষ্ট হচ্ছে রে…🥺",
    "চোখে ঘুম নেই রে ভাই🥱",
    "বুঝি না তোরা কি চিন্তা করে এসব বলিস🤔",
    "আজ তো অনেক কাজ বাকি🥲",
    "ভাবি তুই আমায় ভুলে গেছিস😞",
    "তুই না থাকলে আমি কিচ্ছু না রে🥹",
    "একটু শান্ত থাকিস তো🙄",
    "এইটা তো তুই আগেও বলছিলি🙃",
    "তুই কি আসলেই ঠিক আছিস?🥺",
    "প্লিজ আমাকে একা ফেলে যাস না😢",
    "তুই আসলেই আমার বন্ধু?😒",
    "তোকে ছাড়া কিছুই ভালো লাগে না❤️",
    "তোকে ছাড়া এই দুনিয়াটা একেবারে ফাঁকা😔",
    "ভালো থাকিস সব সময় 🥰",
    "আজকে অনেক ভালো লাগছে😊",
    "তুই আমার জীবনের সবচেয়ে বড় পাওয়া🙂",
    "তুই কি আমার কথা মনে রাখিস?🤔",
    "ভুলে যাস না আমায়🥺",
    "তোর জন্য সব করতে পারি আমি🙂",
    "তুই আসলেই অনেক স্পেশাল আমার জন্য❤️",
    "এই বটটাকে একটু শান্তিতে থাকতে দাও না😤"
  ];

  const lowerBody = event.body?.toLowerCase();

  if (!event.body) return;

  if (lowerBody === "miss you") {
    return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID, messageID);
  }

  // র‍্যান্ডম রিপ্লাই পাঠাও
  const rand = responses[Math.floor(Math.random() * responses.length)];
  return api.sendMessage(rand, threadID, messageID);
};
