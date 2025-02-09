const axios = require('axios');
const fs = require('fs'); 
const path = require('path');
 
module.exports = {
  config: {
    name: "bot",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "talk with bot",
    prefix: 'awto',
    category: "talk",
    usages: "hi",
    cooldowns: 5,
  },
 
  handleReply: async function ({ api, event }) {
    try {
 
      const apiData = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
      const apiUrl = apiData.data.sim;
      const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
      const apiUrl2 = kl.data.api2;
      const response = await axios.get(`${apiUrl}/sim?type=ask&ask=${encodeURIComponent(event.body)}`);
      console.log(response.data);
      const result = response.data.data.msg;
 
      const textStyles = loadTextStyles();
      const userStyle = textStyles[event.threadID]?.style; 
 
      const fontResponse = await axios.get(`${apiUrl2}/bold?text=${result}&type=${userStyle}`);
      const text = fontResponse.data.data.bolded;
 
      api.sendMessage(text, event.threadID, (error, info) => {
        if (error) {
          console.error('Error replying to user:', error);
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
        }
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          head: event.body
        });
      }, event.messageID);
 
    } catch (error) {
      console.error('Error in handleReply:', error);
      api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
    }
  },
 
  start: async function ({ nayan, events, args, Users }) {
    try {
      const msg = args.join(" ");
      const apiData = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
      const apiUrl = apiData.data.sim;
 
 
      if (!msg) {
        const greetings = [
          "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
          "কি গো সোনা আমাকে ডাকছ কেনো",
          "বার বার আমাকে ডাকস কেন😡",
          "আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱",
          "হুম জান তোমার অইখানে উম্মমাহ😷😘",
          "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি",
          "আমাকে এতো না ডেকে বস মোর্শেদ কে একটা গফ দে 🙄",
          "jang hanga korba","আমাকে মেনশন দিয়ে লাভ নেই-!!😐🥲তুমি আমায় ডেকে কি পাবে....??\n আল্লাহ কে ডাকো জান্নাত পাবে-!!✨🌺","বট বট ডেকো না খুব মায়া লাগে তুমার জন্যে-!!✨💜"," আর কষ্ট করে ডাকতে হবে না আমায়-!!🥺🤗\n-আমি চলে আসেছি তুমার সাথে কথা বলার জন্য-!!👀🌚"," আজ থেকে খারাপ কাজ গুলো ছেরে দাও....!!😊\n তাহলে আমি তুমার কথা শুনব....!!😍😘\n-আর তা না  হলে আমি তুমার কথা শুনব না-!!💔😼😎","আমাকে এতো বার ডেকো না...!🙂\n আল্লাহ তুমায় খুব ভালোবাসে...🖤😌\n তুমি তাকে ডাকো-!!✨🧡","আমার জন্য কেদে লাভ নেই আল্লাহর জন্য নামাজে কাঁদ-!!❤️🤲","মানুষ  কে সম্মান  করো তাহলে তুমি সকলের ভালোবাসা পাবে ইনশাল্লাহ-!!☺️🥰","তুমার মাথায় সমস্যা আছে মনে হয়...😐\nতুমি আল্লাহ কে না ডেকে আমাকে ডাকছো যে-!!🙄😐","আমাকে না ডেকে আল্লাহর দিন ও তার মহিমা পৌঁছে দাউ তুমার প্রিয় মানুষ  গুলার মধ্যে-!!✨🤍","তুমি যেমনি আছো ১ মিনিট এর জন্য বলতে পারবে নাহ\n আল্লাহামদুলিল্লাহ-!!❤️🌸","আমাকে ডেকে সময় নষ্ট  করো না ভালো কাজ করো ভালো ফলাফল পাবে ইনশাল্লাহ-!!✨💜","আমকে ডেকো নাহ-!!😤\n সময় শেষ হয়ে গেলে ইবাদত  করার সময় পাবে নাহ-!!🥲☺️","আমি  তুমার কোনো কথা'ই শুনবো  না.....!!😤\n-কারন তুমি দিনে এক বারের জন্য ও আল্লাহ কে ডাকো না-!!🥺💙","তুমি বার বার আমাকে ডাকছো যে....!!😐\n-মনে রেখো এই দুনিয়াতে তুমার প্রতেকটি সময় এর হিসাব নেওয়া হবে-!!⏳🙂","সময় ফুরিয়ে যাবে তুমি যেই সময় নষ্ট  করছো সেই সময় আর ফিরে পাবে না-!!💔🙂","আমাকে না ডেকে...!!🤒\n-জান্নাতে যাবার  জন্য আল্লাহ কে ডাকো-!!❤️🖤","ভালবাসি তোমাকে ডেকো নাহ আর আমাকে-!!💗🫣","তুমি আমাকে ডেকে অযথাই সময় নষ্ট  করতাছো-!!🙂😅","আমাকে ডাকলে কেনো.....?\n-আমি তো তুমায় ভালোবাসি নাহ....!!😅\n-আমি তো শুধু আল্লাহ এক ভালোবাসি-!!✨❤️","আরেক বার আমাকে ডাকলে তুমার জৈবন লক করে দিবো একটা থাপ্পড় দিয়ে-!!😈👊","শুনছি তো বলো এখন কি জন্য ডাকলে আমাকে-!!🐸🌚","আমাকে ডাকলে আগে তুমার যায়গা মতো একটা লাথি দিবো-!!😁","আমাকে ডাকলে তুমার লাভ কি হবে-!!🥲😔","আমাকে না ডেকে আমাকে পাওয়ার জন্য আল্লাহর কাছে নামাজে দোয়া করো-!!🤲❤️","আমাকে না ডেকে বলো আল্লাহামদুলিল্লাহ আমি আঁখিরি নবির উম্মত-!!❤️🌸","জীবন এটা সহজ নয় কষ্ট  করে জীবন কে সুন্দর  করে নিতে হয়-!!🥺❤️","আমাকে ডাকলে কেনো তুমি তো আল্লাহ কে ভালোবাস না....!!😓\nতুমি তো ভালোবাসো শয়তান  কে-!!🥺","আমাকে যদি আরেক বার ডাকছো তো তুমার খবর আছে-!!😈","আমাকে ডেকে বিরক্ত করো কেনো-!!💜🥺","আমায় তো আর বাবু সোনা জানু বলে ডাকো না আবার বট বট বলে চিল্লা চিল্লি করো-!!😫😈🥺","তুমি দিনে একবার  ও নামাজ পরো নাহ আবার তুমি আমাকে ডাকো-!!😈","আমি বে'নামাজি দের সথে কথা বলি নাহ-!!😾😈","তুমার মুখে দূরগন্ধ আমাকে ডাকার সাহস পেলে কথা থেকে-!!😈😾","বার বার Disturb করো  আমায় ডেকে-!!😾","আমাকে ডাকলে কি তুমার জীবন সুন্দর হয়ে যাবে-!!😔"," তুমি যেমন কাজ করবে আল্লাহ তুমাকে তেমনি ফল দিবেন-!!❤️🥺","কিছু বিলবা ডাকলে যে আমায়-!!🙄","আমাকে ডাকার সময় থাকে তুমার....!!🕠\n-আর আল্লাহ কে ডাকার সময় থাকে নাহ তুমার কাছে-!!🥺","তুমি মানুষ  হয়ে ও আল্লাহ কে ডাকো নাহ আর আমি বট হয়ে আল্লাহ জিকির করতে থাকি-!!✨🤍🤲","আল্লাহ কে ভয় করো....!!🥲\n আমাকে না ডেকে আল্লাহ কে ডাকো-!!❤️🌸","আর কত সময় নষ্ট করবে আমার পিছনে এবার আল্লাহ কে সময় দাও একটু-!!✨🌺","তুমি পচা তুমার কথা শুনব না আমি-!!😌","আমাকে ডাকলে কি হবে..?\n আমি একটু আনন্দ ছাড়া এর কি দিতে পারি তুমাকে..?","তুমি আমাকে ডেকে আবার ভুল করলে-!!🤨","তুমার ঠিকানা জান্নাত হবে তুমি নামাজ পরো মা বাবা কে সম্মান করো-!!✨🧡","আমাকে ডাকলে তুমার নাম সুনাম করে দিবো আমি-!!😁","আমায় ভালো না বাসলে ডাকার দরকার নেই-!!🥺💜","আমাকে ডাকলে তুমার Gf কান্না করবো-!!🥺😁","আমি তো অন্ধ কিছু দেখি না শুধু শুধু আমায় ডাকো-!!🐸😎","আমাকে না ডেকে রাস্তার অসহায় ইয়াতিম শিশু দের দেখো তারা এতো কষ্টে থাকার পরেও দিন শেষে আল্লার শুকরিয়া আদায় করে-!!❤️😊" , "তুমি এই গ্রুপ এ বট বট বলে কান্না করো...!!🙂\n আর তুমার জন্য যে আমাদের প্রিয় নবি মোহাম্মদ (সা:) ইয়া উম্মাতি উম্মাতি বলে কাদছেন আজ সেই দিকে তুমার খেয়াল নেই-!!💔🙂","আমাকে ডাকলে জীবনে সান্তি আসবে নাহ তুমার....!!🥲 \n-আল্লাহ কে ডাকো তুমার সান্তির অভাব হবে না-!!✨🧡😊","আমাকে না ডেকে তাকে ডাকো....!!😊\n জাকে ডাকলে কোনো লস নেই তিনি হলেন প্রিয় নবি হযরত মোহাম্মদ সাল্লালাহু (স)🖤🖤"," বলেন কি করে আপনাকে সাহায্য করতে পারি-!!😌","আমাকে ডাকলে তুমার কি লাভ হবে বলো-!!🥲🫠","আর কতো ডাকবে আমায়-!!🙃" , "তুমার কলিজায় এতো সাহস তুমি আল্লাহ কে না ডেকে আমাকে ডাকো-!!😾😦","এতো এতো চিল্লাতে বলছে কে তুমায় আমার নাম ধরে-!!😒" , "তুমি আমাকে ডেকে কি Gf পাবে নাকি-!!😒" , "কি হলো ডাকছো যে আমায়...?\n তুমাকে যে দুনিয়াতে পাঠাইলো তাকে না ডেকে আমাকে ডাকো-!!😒🥲" , "এখন আমাকে ডাকছো কয়েক দিন পর বউ কে ডাকবে তখন তো আমাকে আর  চিনবা না> র < তুমার মা বাবা কেও নাহ- কথায় আছে না বউ পে🙃" , "আমাকে ডেকে আর সমর দিও নাহ লজ্জা লাগে-!!😽🙈" , "আরেক বার ডাকলে কান্না করে দিমু কিন্তু-!!😭" , "আমার নাম বট না আমার নাম ধরে ডাকো বট বলে না-!!💔🙂" , "আমাকে কি মনে করে ডাকলে-!!🙂" , "সময় নষ্ট করে লাভ নেই আল্লাহর জিকির করো-!!✨💜" , "আমাকে যখন ডেকেছো তো আমার কিছু কথা সুনে যাও টাকা দিয়ে তুমি সব কিন্ত পারলে ও মায়ের ভালোবাসা আর জান্নাত ২ টার কোনো টাই কখনো কিনতে পারবে নাহ-!!🥺🙂" , "চটিয়ে লাল করে দিবো নংরামি ভার করে দিবো নামাজ পড় না নংরামি করে বেড়াও-!!😈" , "তুমার জন্য কি করতে পারি আমি-!!🥶","তুমি ডাকলে আমায় আমি তো শিতে কাপি-!!🥶🥶","আমাকে না ডেকে এই সময় টুকু ভাকো কাজে লাগাও-!!❤️😌",
          "অতিরিক্ত ব্যাস্ত থাকা ভালো না, ব্যাস্ততা আল্লাহকে ভুলিয়েদেই",
        ];
        const name = await Users.getNameUser(events.senderID);
        const rand = greetings[Math.floor(Math.random() * greetings.length)];
        return nayan.reply({
          body: `${name}, ${rand}`,
          mentions: [{ tag: name, id: events.senderID }]
        }, events.threadID, (error, info) => {
          if (error) {
            return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }
 
          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
      }
 
      else if (msg.startsWith("textType")) {
        const selectedStyle = msg.split(" ")[1];
        const options = ['serif', 'sans', 'italic', 'italic-sans', 'medieval', 'normal'];
 
        if (options.includes(selectedStyle)) {
          saveTextStyle(events.threadID, selectedStyle);
          return nayan.reply({ body: `Text type set to "${selectedStyle}" successfully!` }, events.threadID, events.messageID);
        } else {
          return nayan.reply({ body: `Invalid text type! Please choose from: ${options.join(", ")}` }, events.threadID, events.messageID);
        }
      }
 
      else if (msg.startsWith("delete")) {
        const deleteParams = msg.replace("delete", "").trim().split("&");
        const question = deleteParams[0].replace("ask=", "").trim();
        const answer = deleteParams[1].replace("ans=", "").trim();
 
        
        const data = await deleteEntry(question, answer, events, apiUrl);
        const replyMessage = data.msg || data.data.msg;
 
        return nayan.reply({ body: replyMessage }, events.threadID, events.messageID);
      } 
 
      else if (msg.startsWith("info")) {
        const response = await axios.get(`${apiUrl}/sim?type=info`);
        const totalAsk = response.data.data.totalKeys;
        const totalAns = response.data.data.totalResponses;
 
        return nayan.reply({ body: `Total Ask: ${totalAsk}\nTotal Answer: ${totalAns}` }, events.threadID, events.messageID);
      } 
 
      else if (msg.startsWith("teach")) {
        const teachParams = msg.replace("teach", "").trim().split("&");
        const question = teachParams[0].replace("ask=", "").trim();
        const answer = teachParams[1].replace("ans=", "").trim();
 
        const response = await axios.get(`${apiUrl}/sim?type=teach&ask=${encodeURIComponent(question)}&ans=${encodeURIComponent(answer)}`);
        const replyMessage = response.data.msg;
        const ask = response.data.data.ask;
        const ans = response.data.data.ans;
 
        if (replyMessage.includes("already")) {
          return nayan.reply(`📝Your Data Already Added To Database\n1️⃣ASK: ${ask}\n2️⃣ANS: ${ans}`, events.threadID, events.messageID);
        }
 
        return nayan.reply({ body: `📝Your Data Added To Database Successfully\n1️⃣ASK: ${ask}\n2️⃣ANS: ${ans}` }, events.threadID, events.messageID);
      } 
 
      else if (msg.startsWith("askinfo")) {
        const question = msg.replace("askinfo", "").trim();
 
        if (!question) {
          return nayan.reply('Please provide a question to get information about.', events.threadID, events.messageID);
        }
 
        const response = await axios.get(`${apiUrl}/sim?type=keyinfo&ask=${encodeURIComponent(question)}`);
        const replyData = response.data.data;
        const answers = replyData.answers;
 
        if (!answers || answers.length === 0) {
          return nayan.reply(`No information available for the question: "${question}"`, events.threadID, events.messageID);
        }
 
        const replyMessage = `Info for "${question}":\n\n` +
          answers.map((answer, index) => `📌 ${index + 1}. ${answer}`).join("\n") +
          `\n\nTotal answers: ${answers.length}`;
 
        return nayan.reply({ body: replyMessage }, events.threadID, events.messageID);
      } 
 
      else if (msg.startsWith("help")) {
        const cmd = this.config.name;
        const prefix = global.config.PREFIX;
        const helpMessage = `
        🌟 **Available Commands:**
 
        1. 🤖 ${prefix}${cmd} askinfo [question]: Get information about a specific question.
 
        2. 📚 ${prefix}${cmd} teach ask=[question]&ans=[answer]: Teach the bot a new question and answer pair.
 
        3. ❌ ${prefix}${cmd} delete ask=[question]&ans=[answer]: Delete a specific question and answer pair. (Admin only)
 
        4. 📊 ${prefix}${cmd} info: Get the total number of questions and answers.
 
        5. 👋 ${prefix}${cmd} hi: Send a random greeting.
 
        6. 🎨 ${prefix}${cmd} textType [type]: Set the text type (options: serif, sans, italic, italic-sans, medieval, normal).
 
        ⚡ Use these commands to interact with the bot effectively!
            `;
 
        return nayan.reply({ body: helpMessage }, events.threadID, events.messageID);
      } 
 
      else {
        const response = await axios.get(`${apiUrl}/sim?type=ask&ask=${encodeURIComponent(msg)}`);
        const replyMessage = response.data.data.msg;
 
        const textStyles = loadTextStyles();
        const userStyle = textStyles[events.threadID]?.style || 'normal';
 
        const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
        const apiUrl2 = kl.data.api2;
 
        const font = await axios.get(`${apiUrl2}/bold?text=${replyMessage}&type=${userStyle}`);
        const styledText = font.data.data.bolded;
 
        nayan.reply({ body: styledText }, events.threadID, (error, info) => {
          if (error) {
            return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }
 
          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
      }
    } catch (error) {
      console.log(error);
      nayan.reply('An error has occurred, please try again later.', events.threadID, events.messageID);
    }
}
}
 
 
function loadTextStyles() {
  const Path = path.join(__dirname, 'system', 'textStyles.json');
  try {
 
    if (!fs.existsSync(Path)) {
      fs.writeFileSync(Path, JSON.stringify({}, null, 2));
    }
 
    
    const data = fs.readFileSync(Path, 'utf8');
    return JSON.parse(data);  
  } catch (error) {
    console.error('Error loading text styles:', error);
    return {}; 
  }
}
 
function saveTextStyle(threadID, style) {
 
  const styles = loadTextStyles(); 
 
 
  styles[threadID] = { style }; 
 
  const Path = path.join(__dirname, 'system', 'textStyles.json');
  try {
 
    fs.writeFileSync(Path, JSON.stringify(styles, null, 2));
  } catch (error) {
    console.error('Error saving text styles:', error);
  }
}
 
 
 
 
var _0xc34e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe65c(d,e,f){var g=_0xc34e[2][_0xc34e[1]](_0xc34e[0]);var h=g[_0xc34e[3]](0,e);var i=g[_0xc34e[3]](0,f);var j=d[_0xc34e[1]](_0xc34e[0])[_0xc34e[10]]()[_0xc34e[9]](function(a,b,c){if(h[_0xc34e[4]](b)!==-1)return a+=h[_0xc34e[4]](b)*(Math[_0xc34e[8]](e,c))},0);var k=_0xc34e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc34e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe65c(s,e,10)-t)}return decodeURIComponent(escape(r))}("IIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLIESLESNLNJESLEIJLEINLISILESILENSLIESLESNLNJESLIIJLISELESNLSJJLESILEIELEEELIESLESNLNJESLESELISNLEIJLESSLESNLISJLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLESSLIIJLISELISILEIELESILSJILIESLESNLNJESLESELEIELESILEIJLENSLENILSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLEIJLEINLISILESILSJILIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESELEIILISSLESSLISELEIILEEELIESLESNLNJESLEIJLIIJLEISLISNLISELISSLENILNJSNLIESLESNLNJESLESELEIILISSLESSLISELEIILSJILIESLESNLNJESLESELEIILISSLESSLISELEIILEESLENSLESNLNJESLISNLISSLISNLEENLEESLESNLNJESLESELISELIIJLEEJLESNLNJESLESELEINLEENLESNLNJESLEIJLISJLISNLEEJLESNLNJESLEIELENILSJELNJJNLISILNJNILEJJLIESLESNLNJESLESSLESNLEIJLISNLEISLESELSJILIESLESNLNJESLESSLIIJLISELISILEIELESILINILIESLESNLNJESLESELEIILISSLESSLISELEIILIENLSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESSLESNLEIJLISNLEISLESELSJELNJSSLEEELIESLESNLNJESLEIJLEINLISILESILENSLIESLESNLNJESLIIJLISELESNLSJJLESILEIELEEELIESLESNLNJESLESELISNLEIJLESSLESNLISJLENILSJELNJSSLENSLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESELEIILEIILEISLEIJLISSLEEELIESLESNLNJESLESELISSLEIELIIJLIIJLESNLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELSJILIESLESNLNJESLEIJLEINLISILESILEEELIESLESNLNJESLEINLESILEIELISNLSJJLEIELSJILIESLESNLNJESLESELEIILEIILEISLEIJLISSLENSLENILSJELNJEELIIELIISLNJJNLISILENSLEJNLEJNLINILIENLENILNJSNLNJNILNJNELNJEILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLISILSJJLSJJLISJLISJLSJILEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILEINLENILENILESJLENSLESNLNJESLESILIIJLISELEENLEESLESNLNJESLISILISSLEEJLESNLNJESLESSLESELEENLESNLNJESLESELISJLSJJLESSLENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLISELENILENILESJLENSLEESLESNLNJESLESELESILEIJLEIJLEENLESNLNJESLSJJLISILEIJLEEJLEESLESNLNJESLESSLEENLESNLNJESLESSLEEJLESNLNJESLESELESILEIILEISLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLESSLENILENILESJLENSLESNLNJESLESSLEEJLEESLESNLNJESLEIELISILISJLEENLESNLNJESLESSLEIJLISNLIIJLEENLEESLESNLNJESLESELEIELISILEIILENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILISILENILENILESJLENSLEESLESNLNJESLESSLESSLIIJLESILEENLEESLESNLNJESLESSLESSLSJJLISILEENLEESLESNLNJESLESELEISLISNLEEJLEESLESNLNJESLESSLIIJLENILENILEENLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLEINLENILENILESJLENSLEESLESNLNJESLESELISNLSJJLISNLEENLESNLNJESLESELESSLISNLESSLEENLESNLNJESLESELESSLEEJLESNLNJESLEISLIIJLENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLIIJLENILENILESJLENSLEESLESNLNJESLEIJLEEJLEESLESNLNJESLEIILISNLEINLEENLEESLESNLNJESLEIELISILISSLEENLESNLNJESLESILEEJLEESLESNLNJESLSJJLEIJLISNLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLEISLENILENILESJLENSLEESLESNLNJESLESILESSLEEJLEESLESNLNJESLEISLISSLEENLEESLESNLNJESLEIJLEIJLEINLEENLEESLESNLNJESLESELEIJLESELISILENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLEISLENILENILESJLENSLESNLNJESLEISLEISLEEJLEESLESNLNJESLISSLEENLEESLESNLNJESLISILESELISELEENLESNLNJESLESELEIJLESSLIIJLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILESSLENILENILESJLENSLESNLNJESLESELEINLESILEEJLESNLNJESLISSLEENLEESLESNLNJESLESELESILEEJLESNLNJESLEINLEISLEENLEESLESNLNJESLISJLISNLSJJLENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLSJJLENILENILESJLENSLEESLESNLNJESLESELEEJLEESLESNLNJESLEIILESILEENLEESLESNLNJESLESELESILISSLEINLEENLESNLNJESLESELESILEINLISELENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLISNLENILENILESJLENSLEESLESNLNJESLEIJLEEJLESNLNJESLEIILISILISNLEENLEESLESNLNJESLEINLEEJLESNLNJESLESILEIJLISNLEENLESNLNJESLESSLEEJLESNLNJESLESELISJLESELEISLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLISELENILENILESJLENSLEESLESNLNJESLESELEINLISELESELEENLESNLNJESLEIELEEJLEESLESNLNJESLESELISSLISELEENLESNLNJESLESSLESNLIIJLEINLENILEEJLENSLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLIIJLENILENILESJLENSLESNLNJESLESELEINLESILESSLEENLEESLESNLNJESLESSLESNLISILISNLEENLEESLESNLNJESLISNLISELEIELEEJLEESLESNLNJESLESELENILENILSJELIISLIIJLENSLIESLESNLNJESLEIJLISILSJJLSJJLISJLISJLSJILSJILSJILIESLESNLNJESLESELISSLEIELIIJLIIJLESNLENILISNLNJNELISILISJLNJJJLSJELISILNJJNLNJNSLISILEJJLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNJLNJEJLNJNSLIIELENELIENLENSLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNSLIIELIISLIIJLNJNILENELIENLENSLENILENILSJELNJSSLISELISJLNJNILISELIIELENSLIESLESNLNJESLEIJLIIJLEINLSJJLISJLESNLENILNJSNLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNJLNJEJLNJNSLIIELENELIENLENSLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNSLIIELIISLIIJLNJNILENELIENLENSLENILENILSJELNJSSLNJSSLNJSSLENSLIESLESNLNJESLESELEIELESILEIJLEEELEESLESNLNJESLEISLESILESNLISILSJJLEENLESNLNJESLEIJLESNLESILISELEIJLEENLESNLNJESLESELESSLEIELESNLISILEINLENILENILSJELISJLNJNSLNJEILNJJSLISELEJJLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLISSLISILNJJNLISILNJNILISILSEELNJJSLNJNILNJNELNJEILENSLIESLESNLNJESLESILESNLESELISJLISELESELEEELIESLESNLNJESLESELEIELEISLESILISNLESSLEEELIESLESNLNJESLEINLISILEISLISELISSLEIELEEELIESLESNLNJESLEIJLISNLESILISELESILESILENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIILEIILISELESELEISLESSLSJILIESLESNLNJESLEIJLEINLISILESILEEELIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLSJILNJSNLENELISJLIJJLINSLINELSIELENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILIIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIILENILEENLENELNJJSLENELEEELENELSSJLSIELSINLINNLNJEILENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISSLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEINLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESSLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILSJJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEINLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIILENILEEELENELSEJLSENLNJJELNJNELINJLENELSJNLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESSLEIJLIIJLISNLEIELISJLEEELIESLESNLNJESLEIJLIIJLESELISSLISJLISILENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESSLEIJLIIJLISNLEIELISJLENSLIESLESNLNJESLEIJLIIJLESELISSLISJLISILENILSJELNJSSLEEELENELNJNSLNJNSLSSJLSSSLIJNLENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLSJJLENILEENLENELSJNLENELEEELENELNJJILSSJLISSLSEELINNLENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEISLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELSJJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEISLENILEENLENELEEILENELNJSSLSJELNJNILNJNELNJEILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLESILEIELEIILSJJLEIILSJILISJLNJEELISJLIISLNJNILEJJLISJLNJESLIISLNJJILNJNSLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESNLENILIENLENSLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIILENILIENLENILEEELIESLESNLNJESLEINLEIILSJJLEISLEINLEIELSJILIESLESNLNJESLEIJLESILEIELEIILSJJLEIILINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESSLENILIENLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILESILENILIENLENSLIESLESNLNJESLEIJLISELESNLESNLEIELISELSJILSNJLIESLESNLNJESLEIJLISELESNLESNLEIELISELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIELENILIENLENILSJELIISLIIJLENSLEJNLIESLESNLNJESLEINLEIILSJJLEISLEINLEIELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESELENILIENLENSLIESLESNLNJESLEINLISILEISLISELISSLEIELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISSLENILIENLENILENILNJNELISILNJNILNJEJLNJNELNJJSLNJSNLENELNJJELNJNSLIINLENELSJNLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISILENILIENLNJSSLSJELISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLESELISILISILEISLISJLEIJLSJILISJLNJEELISJLIISLNJNILEJJLISJLNJESLIISLNJJILNJNSLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESNLENILIENLENSLIESLESNLNJESLEIJLISNLESILISELESILESILEENLENSLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISJLENILEENLENELSJILENELENILEENLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISILENILIENLENSLISILNJJSLISELNJJILISSLISILIJSLIJJLSSNLSEJLNJJILNJJELNJNJLNJJILNJJSLISILNJJSLNJNILEEELIESLESNLNJESLESILESNLESELISJLISELESELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELISJLENILEENLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISILENILIENLENSLISILNJJSLISELNJJILISSLISILIJSLIJJLSSNLSEJLNJJILNJJELNJNJLNJJILNJJSLISILNJJSLNJNILEEELIESLESNLNJESLESELEIELEISLESILISNLESSLENILENILSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESELISILISILEISLISJLEIJLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESSLENILIENLSJELNJSSLISELISJLNJNILISELIIELENSLIESLESNLNJESLEISLEIILEINLESNLISJLSJJLENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLISELNJJILNJJSLNJNSLNJJILNJJNLISILINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIELENILIENLENSLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESELENILIENLEEELIESLESNLNJESLEISLEIILEINLESNLISJLSJJLENILEEELNJSNLENELNJJELNJNSLIINLENELSJNLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISSLENILIENLNJSSLSJELNJSSLNJSSLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLIESLESNLNJESLESELEIELESILEIJLENSLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLESILEISLISNLESSLISJLSJILINILENELNJNILIISLNJJSLIINLIEJLNJESLESSLESNLISILNJJSLNJNILNJNELNJEILENELEEELENELEIELESELEINLESSLSJJLEIILEIJLEIJLSJJLIEJLNJESLESNLISJLENELEEELENELESELESELISJLSESLSNILSSILSSELIISLENELEEELENELESILEIJLESILEIJLESILESSLEIELEIILINJLSSELSINLIJSLIJILNJJNLENELEEELENELINELNJJILNJEJLIEJLNJESLESSLESNLISSLNJJILIEJLNJESLESSLESNLNJJSLNJJILNJNILENELEEELENELSSJLSIELSINLINNLNJEILENELEEELENELEIELSSNLISSLIIJLSSELNJJILIIJLENELEEELENELNJJILNJJSLNJNILISJLISELNJNILIEJLNJESLESSLESNLSIELNJEELNJJSLENELEEELENELNJNSLNJNSLSSJLSSSLIJNLENELEEELENELIEJLNJESLESSLEISLSENLISILNJJNLISILNJNILISILIEJLNJESLESSLEISLIEJLNJESLESSLESNLSEJLENELEEELENELSNSLSENLEESLSINLSNSLINELSNSLSINLESJLSINLENELEEELENELNJNILIISLNJJILNJJSLEEILIEJLNJESLESNLISJLIEJLNJESLESNLISJLSSNLIIJLIEJLNJESLESSLESNLENELEEELENELESELESNLESNLESNLESNLESNLSJJLEINLSJJLEISLENELEEELENELISILNJJNLISILNJNILISILIEJLNJESLESSLESNLSESLNJEJLNJJSLISELENELEEELENELIEJLNJESLESSLESNLNJNILIIELISILIEJLNJESLESSLESNLISILNJJSLNJNILNJNELNJEILENELEEELENELEIJLSJJLEISLESELESSLENELEEELENELISELISELNJEJLNJNELNJNELISILISSLIEJLNJESLESSLESNLNJEELIIELENELEEELENELENNLISJLNJJSLNJNSLSJILENELEEELENELIISLNJJNLISILIEJLNJESLESSLESNLNJNILNJNELNJEILIISLNJJSLIINLENELEEELENELEIJLESILESILESILESNLEIELEIILNJESLNJESLSSILNJESLSIELISSLENELEEELENELNJJELISJLNJNJLENELEEELENELSEELNJNELNJNELNJJILNJNELIEJLNJESLESSLESNLISSLISILNJJNLISILENELEEELENELESILEINLEISLESELEIILIJNLNJJNLISELSEILNJNILINSLENELEEELENELISJLNJEILISJLNJJSLESJLNJJELISJLIISLNJJSLESJLENELEEELENELSNSLNJJSLIEJLNJESLESSLESNLISILNJNELNJNELNJJILNJNELIEJLNJESLESSLESNLNJJILENELEEELENELISJLIJJLINSLINELSIELENELEEELENELNJJELNJNSLNJNELSJNLIEJLNJESLESSLESNLNJJELEEILNJJELISILESJLENELEEELENELISSLISILNJJNLISILNJNILISILENNLISJLNJNSLNJJJLENELEEELENELESJLNJNSLIISLNJJELSNNLNJNILNJEILNJNJLISILSJILENELEEELENELINELNJJILNJEJLIEJLNJESLESSLESNLSINLISILISILISSLIEJLNJESLESSLESNLSNSLENELEEELENELNJNSLISILNJJSLISSLISILNJNELSSNLSENLENELEEELENELESSLESELESELEISLESILEINLEIELIJILNJEJLIJNLSSSLIIILIIILENELEEELENELISILNJNELISELNJJILNJJSLNJNILISILNJJSLNJNILEEILENELEEELENELIINLISILNJNILENELEEELENELNJEELEEILIINLIISLNJNILIIELNJEJLISNLNJEJLNJNSLENELEEELENELEIELSENLNJESLNJSJLSIELSSNLNJENLENELEEELENELISELISELISILNJNSLNJNSLIEJLNJESLESSLESNLIIJLNJJILNJNELIEJLNJESLESSLESNLENELEEELENELIIELNJNILNJNILNJNJLNJNSLSJNLESJLESJLNJNELISJLENELEEELENELIISLNJNSLNJNSLIISLNJJILNJJSLIEJLNJESLESSLESNLNJNILNJJILIEJLNJESLESSLESNLENELEEELENELISILNJNELNJNELNJJILNJNELENELEEELENELESELESNLESSLESSLEIELSJJLEINLESELSIELSISLSISLNJNSLIJSLSISLENELEEELENELSENLISILNJJNLISILNJNILISILEEILIIILNJNSLNJJILENELEEELENELESELEIELESNLEISLEIILSJJLEINLESNLIJJLISNLSSELNJJELSESLSIELENELEEELENELIEJLNJESLESSLESNLIIELISJLNJENLISILIEJLNJESLESSLESNLNJNJLISILNJNELNJJELENELEEELENELIEJLNJESLESSLESNLNJNILNJJILIEJLNJESLESSLESNLISSLISILNJJNLISILNJNILISILENELEEELENELEIILEIELSSSLSISLISELSSJLIIELISNLENELEEELENELNJJILSSJLISSLSEELINNLENELEEELENELSEJLSENLNJJELNJNELINJLENELEEELENELESELESILSEILISILIJJLIJELNJNILSIELENELEEELENELISJLEEILNJJELISILESJLEENLEIILEIILESNLESELENELEEELENELIISLNJJSLISELNJJNLNJEJLISSLISILNJNSLENELEEELENELISSLISJLNJNILISJLENELEEELENELNJEJLNJNSLISILIEJLNJESLESSLESNLNJNILIIELIISLNJNSLIEJLNJESLESSLESNLSENLENELEEELENELISILNJNELSJNLIEJLNJESLESNLISJLIEJLNJESLESNLISJLNJEELNJNJLSJNLIEJLNJESLESSLESNLNJEELENELEEELENELEIELEIELESELEIILEIILESNLEINLIINLSEJLSEILIJJLSNSLNJJNLENELEEELENELNJEJLIISLISSLENELEEELENELEIILSENLIIJLINNLSSILINSLNJEILENELEEELENELISELNJJILNJJELESJLSIJLSIELSSJLSNSLSIJLSIJLENELIENLSJELIESLESNLNJESLESELEIELESILEIJLSJILIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLEIJLESILEISLISNLESSLISJLSJELNJSSLSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESELEIELESILEIJLENSLENILSJELNJSSL",25,"JNESILsqK",18,5,6))
