/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "Sadvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon",
  description: "SAD VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["-- 💙•༎♡༎•💙──🦋ლ-ლ 𝘿𝙤𝙣,𝙩..𝙩𝙧𝙪𝙨𝙩 𝙢𝙚 𝙢𝙮 𝙨𝙢𝙞𝙡𝙚 \nঅনেক কষ্ট নিয়েও হাসতে পারি..!!🙂💔🥀\n💙•༎♡༎•💙😽 --"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=16KeE4J7L2Pd8cCKIBvlwEPP07A92b-eb",
    "https://drive.google.com/uc?id=16MhNPi_H0-tEe5PQrrqkx_l7SrC_l0kd",
    "https://drive.google.com/uc?id=15w4cvYmKrCW2Hul2AcvPEk5S4b-CH3EE",
    "https://drive.google.com/uc?id=16Xa6thSHdEGCiypaetbAEqVCwEAzFnKX",
    "https://drive.google.com/uc?id=16BnRPvKQd7gd3YLR_rB9QNZymotMqHu7",
    "https://drive.google.com/uc?id=15fDe2735O50z-3G4yQ5tDT9J873x5izm",
    "https://drive.google.com/uc?id=16HgiGU7_Cdh8NtpsKi92dTJmALJCV8jD",
    "https://drive.google.com/uc?id=16KTSrInqvioGnT7RrAskjHYqz8R6RgNY",
    "https://drive.google.com/uc?id=162yWrNRRTeN4tFEjQEtsR4p-4gWbTFaS",
    "https://drive.google.com/uc?id=16-q768c6nXstZEjQhWa1pZUPL2Xpjwo9",
    "https://drive.google.com/uc?id=15bfkP01mTzXutgP_0Z1iyud7SXqq-jOt",
    "https://drive.google.com/uc?id=15WnvdFOQIhKQ1nlZgsABXaf6Q2nQexGW",
    "https://drive.google.com/uc?id=16GTgYVSIDduUs4VTxadIzPPyp9KA_102",
    ,
"https://imgur.com/a/HSEuvNg",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
