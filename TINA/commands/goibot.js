const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NAZRUL",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["\n আমাকে মেনশন দিয়ে লাভ নেই-!!😐🥲তুমি আমায় ডেকে কি পাবে....??\n আল্লাহ কে ডাকো জান্নাত পাবে-!!✨🌺","বট বট ডেকো না খুব মায়া লাগে তুমার জন্যে-!!✨💜"," আর কষ্ট করে ডাকতে হবে না আমায়-!!🥺🤗\n-আমি চলে আসেছি তুমার সাথে কথা বলার জন্য-!!👀🌚"," আজ থেকে খারাপ কাজ গুলো ছেরে দাও....!!😊\n তাহলে আমি তুমার কথা শুনব....!!😍😘\n-আর তা না  হলে আমি তুমার কথা শুনব না-!!💔😼😎","আমাকে এতো বার ডেকো না...!🙂\n আল্লাহ তুমায় খুব ভালোবাসে...🖤😌\n তুমি তাকে ডাকো-!!✨🧡","আমার জন্য কেদে লাভ নেই আল্লাহর জন্য নামাজে কাঁদ-!!❤️🤲","মানুষ  কে সম্মান  করো তাহলে তুমি সকলের ভালোবাসা পাবে ইনশাল্লাহ-!!☺️🥰","তুমার মাথায় সমস্যা আছে মনে হয়...😐\nতুমি আল্লাহ কে না ডেকে আমাকে ডাকছো যে-!!🙄😐","আমাকে না ডেকে আল্লাহর দিন ও তার মহিমা পৌঁছে দাউ তুমার প্রিয় মানুষ  গুলার মধ্যে-!!✨🤍","তুমি যেমনি আছো ১ মিনিট এর জন্য বলতে পারবে নাহ\n আল্লাহামদুলিল্লাহ-!!❤️🌸","আমাকে ডেকে সময় নষ্ট  করো না ভালো কাজ করো ভালো ফলাফল পাবে ইনশাল্লাহ-!!✨💜","আমকে ডেকো নাহ-!!😤\n সময় শেষ হয়ে গেলে ইবাদত  করার সময় পাবে নাহ-!!🥲☺️","আমি  তুমার কোনো কথা'ই শুনবো  না.....!!😤\n-কারন তুমি দিনে এক বারের জন্য ও আল্লাহ কে ডাকো না-!!🥺💙","তুমি বার বার আমাকে ডাকছো যে....!!😐\n-মনে রেখো এই দুনিয়াতে তুমার প্রতেকটি সময় এর হিসাব নেওয়া হবে-!!⏳🙂","সময় ফুরিয়ে যাবে তুমি যেই সময় নষ্ট  করছো সেই সময় আর ফিরে পাবে না-!!💔🙂","আমাকে না ডেকে...!!🤒\n-জান্নাতে যাবার  জন্য আল্লাহ কে ডাকো-!!❤️🖤","ভালবাসি তোমাকে ডেকো নাহ আর আমাকে-!!💗🫣","তুমি আমাকে ডেকে অযথাই সময় নষ্ট  করতাছো-!!🙂😅","আমাকে ডাকলে কেনো.....?\n-আমি তো তুমায় ভালোবাসি নাহ....!!😅\n-আমি তো শুধু আল্লাহ এক ভালোবাসি-!!✨❤️","আরেক বার আমাকে ডাকলে তুমার জৈবন লক করে দিবো একটা থাপ্পড় দিয়ে-!!😈👊","শুনছি তো বলো এখন কি জন্য ডাকলে আমাকে-!!🐸🌚","আমাকে ডাকলে আগে তুমার যায়গা মতো একটা লাথি দিবো-!!😁","আমাকে ডাকলে তুমার লাভ কি হবে-!!🥲😔","আমাকে না ডেকে আমাকে পাওয়ার জন্য আল্লাহর কাছে নামাজে দোয়া করো-!!🤲❤️","আমাকে না ডেকে বলো আল্লাহামদুলিল্লাহ আমি আঁখিরি নবির উম্মত-!!❤️🌸","জীবন এটা সহজ নয় কষ্ট  করে জীবন কে সুন্দর  করে নিতে হয়-!!🥺❤️","আমাকে ডাকলে কেনো তুমি তো আল্লাহ কে ভালোবাস না....!!😓\nতুমি তো ভালোবাসো শয়তান  কে-!!🥺","আমাকে যদি আরেক বার ডাকছো তো তুমার খবর আছে-!!😈","আমাকে ডেকে বিরক্ত করো কেনো-!!💜🥺","আমায় তো আর বাবু সোনা জানু বলে ডাকো না আবার বট বট বলে চিল্লা চিল্লি করো-!!😫😈🥺","তুমি দিনে একবার  ও নামাজ পরো নাহ আবার তুমি আমাকে ডাকো-!!😈","আমি বে'নামাজি দের সথে কথা বলি নাহ-!!😾😈","তুমার মুখে দূরগন্ধ আমাকে ডাকার সাহস পেলে কথা থেকে-!!😈😾","বার বার Disturb করো  আমায় ডেকে-!!😾","আমাকে ডাকলে কি তুমার জীবন সুন্দর হয়ে যাবে-!!😔"," তুমি যেমন কাজ করবে আল্লাহ তুমাকে তেমনি ফল দিবেন-!!❤️🥺","কিছু বিলবা ডাকলে যে আমায়-!!🙄","আমাকে ডাকার সময় থাকে তুমার....!!🕠\n-আর আল্লাহ কে ডাকার সময় থাকে নাহ তুমার কাছে-!!🥺","তুমি মানুষ  হয়ে ও আল্লাহ কে ডাকো নাহ আর আমি বট হয়ে আল্লাহ জিকির করতে থাকি-!!✨🤍🤲","আল্লাহ কে ভয় করো....!!🥲\n আমাকে না ডেকে আল্লাহ কে ডাকো-!!❤️🌸","আর কত সময় নষ্ট করবে আমার পিছনে এবার আল্লাহ কে সময় দাও একটু-!!✨🌺","তুমি পচা তুমার কথা শুনব না আমি-!!😌","আমাকে ডাকলে কি হবে..?\n আমি একটু আনন্দ ছাড়া এর কি দিতে পারি তুমাকে..?","তুমি আমাকে ডেকে আবার ভুল করলে-!!🤨","তুমার ঠিকানা জান্নাত হবে তুমি নামাজ পরো মা বাবা কে সম্মান করো-!!✨🧡","আমাকে ডাকলে তুমার নাম সুনাম করে দিবো আমি-!!😁","আমায় ভালো না বাসলে ডাকার দরকার নেই-!!🥺💜","আমাকে ডাকলে তুমার Gf কান্না করবো-!!🥺😁","আমি তো অন্ধ কিছু দেখি না শুধু শুধু আমায় ডাকো-!!🐸😎","আমাকে না ডেকে রাস্তার অসহায় ইয়াতিম শিশু দের দেখো তারা এতো কষ্টে থাকার পরেও দিন শেষে আল্লার শুকরিয়া আদায় করে-!!❤️😊" , "তুমি এই গ্রুপ এ বট বট বলে কান্না করো...!!🙂\n আর তুমার জন্য যে আমাদের প্রিয় নবি মোহাম্মদ (সা:) ইয়া উম্মাতি উম্মাতি বলে কাদছেন আজ সেই দিকে তুমার খেয়াল নেই-!!💔🙂","আমাকে ডাকলে জীবনে সান্তি আসবে নাহ তুমার....!!🥲 \n-আল্লাহ কে ডাকো তুমার সান্তির অভাব হবে না-!!✨🧡😊","আমাকে না ডেকে তাকে ডাকো....!!😊\n জাকে ডাকলে কোনো লস নেই তিনি হলেন প্রিয় নবি হযরত মোহাম্মদ সাল্লালাহু (স)🖤🖤"," বলেন কি করে আপনাকে সাহায্য করতে পারি-!!😌","আমাকে ডাকলে তুমার কি লাভ হবে বলো-!!🥲🫠","আর কতো ডাকবে আমায়-!!🙃" , "তুমার কলিজায় এতো সাহস তুমি আল্লাহ কে না ডেকে আমাকে ডাকো-!!😾😦","এতো এতো চিল্লাতে বলছে কে তুমায় আমার নাম ধরে-!!😒" , "তুমি আমাকে ডেকে কি Gf পাবে নাকি-!!😒" , "কি হলো ডাকছো যে আমায়...?\n তুমাকে যে দুনিয়াতে পাঠাইলো তাকে না ডেকে আমাকে ডাকো-!!😒🥲" , "এখন আমাকে ডাকছো কয়েক দিন পর বউ কে ডাকবে তখন তো আমাকে আর  চিনবা না> র < তুমার মা বাবা কেও নাহ- কথায় আছে না বউ পে🙃" , "আমাকে ডেকে আর সমর দিও নাহ লজ্জা লাগে-!!😽🙈" , "আরেক বার ডাকলে কান্না করে দিমু কিন্তু-!!😭" , "আমার নাম বট না আমার নাম ধরে ডাকো বট বলে না-!!💔🙂" , "আমাকে কি মনে করে ডাকলে-!!🙂" , "সময় নষ্ট করে লাভ নেই আল্লাহর জিকির করো-!!✨💜" , "আমাকে যখন ডেকেছো তো আমার কিছু কথা সুনে যাও টাকা দিয়ে তুমি সব কিন্ত পারলে ও মায়ের ভালোবাসা আর জান্নাত ২ টার কোনো টাই কখনো কিনতে পারবে নাহ-!!🥺🙂" , "চটিয়ে লাল করে দিবো নংরামি ভার করে দিবো নামাজ পড় না নংরামি করে বেড়াও-!!😈" , "তুমার জন্য কি করতে পারি আমি-!!🥶","তুমি ডাকলে আমায় আমি তো শিতে কাপি-!!🥶🥶","আমাকে না ডেকে এই সময় টুকু ভাকো কাজে লাগাও-!!❤️😌 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };

    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };

   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
