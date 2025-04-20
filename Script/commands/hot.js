/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "ISLAMIC VEDIO",
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
   var hi = ["হট ভিডিও 🥵 ☞ A P I - 𝗟𝗡.𝗫𝗔𝗚𝗢𝗥 😎"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=1B2vnFGHdQWyhZMKek1iy3vDKHSLm0hoZ",
    "https://drive.google.com/uc?id=1AqnBw1xtDcN-NKGTn4mrSPPJEzrWwKAB",
    "https://drive.google.com/uc?id=1BIzH5utey3KZfVSFtpoF7pPNlC0Hmqz2",
    "https://drive.google.com/uc?id=1BK-zniOVPpaaPizp3iGIGBGc8VB_1e1w",
    "https://drive.google.com/uc?id=1Amghm835ttRLycgKnoI5LirnIau0q4HK",
    "https://drive.google.com/uc?id=1C0nDamLCeGkndM5K895gMKUO-qynJ7Iy",
    "https://drive.google.com/uc?id=1ByRqaXlCeM8rMeOF0APPYFNsLJ6btZNS",
    "https://drive.google.com/uc?id=1Br-DuJtFyE6NCM_9olOqmHiHjx7WjU3b",
    "https://drive.google.com/uc?id=1BnmPrkLiEeSQEyJOPcq72v1yDuaerf6Q",
    "https://drive.google.com/uc?id=1Ak864Tka5KDnfCx3EQEQ4lrRJGjqxjC2",
    "https://drive.google.com/uc?id=1BkFWFA9HZ1T_JqKnmk7lWnN8sUThJg2z",
    "https://drive.google.com/uc?id=1AnMUg4iQmr4n4O1TQIl_JpRtziTsUsEI",
    "https://drive.google.com/uc?id=1Bf45E1IEFuM0TI426ZWDYPUr4c19Mh4R",
    "https://drive.google.com/uc?id=1BL0LU2_E0JFdGSSe_cjdlIqvPYP4BbiB",
    "https://drive.google.com/uc?id=1BdAxyovoOu9d2so_8rmy3bpTmHJgLAcJ",
    "https://drive.google.com/uc?id=1BtugvkWioSHEDqZsmztjt4AALHG8xX0t",
    "https://drive.google.com/uc?id=1BSX18J5fvwLWwtE45vpabGMyjl4JJYK1",
    "https://drive.google.com/uc?id=1C2_RSR5qtdKlsGvXjxdV8RYS6VmqPUDc",
    "https://drive.google.com/uc?id=1Bfv-FmU5IT2Rv6fDt7hKM0mExqJynAIk",
    "https://drive.google.com/uc?id=1Btqzy8h6G4ml82bbn9XR8D6Wj9EDh3pR",
    "https://drive.google.com/uc?id=1BSMsu7X-QnQSjhRqKwLXsc6MQ8sh380F",
    "https://drive.google.com/uc?id=1At4L-smH78ERPMnxb7hfTKsoMTks-O3S",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
