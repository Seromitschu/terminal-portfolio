const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
const t = document.querySelector("#cmdTitle");

//// Config*
const version = `1407.29052025.sk.19`;
const config = {
  "seromitschu": {
    "website": {
      "title": `Seromitschu`,
      "repo": `https://github.com/seromitschu/terminal-portfolio`,
      "author": `Seromitschu (or Serhat)`,
    },
    "welcome": {
      "image": '<img style="width: 250px;" src="https://github.com/Seromitschu/seromitschu/raw/main/readme.gif">',
      "first": `<i class="fa-duotone fa-mace"></i> Made by Seromitschu [Version ${version}] <br> <i class="fa-duotone fa-copyright"></i> All rights reserved.
      <i class="fa-duotone fa-folder-open"></i> <a href="https://github.com/seromitschu/terminal-portfolio" target="_blank">Open Source.</a>`,
      "second": `<i class="fa-solid fa-hand-wave"></i> Welcome to my website! Server is loading please wait.`,
      "commands": `<i class="fa-sharp fa-solid fa-user-robot"></i> You can run several commands. Type "<span class="sucess">help</span>" to see the available commands.`
    },
    "commands": {
        "help": {
            "usage": `help`,
            "description": `Lets you see the available commands.`,
            "contents": {
              "helpText": `<span class="yellowText"><i class="fa-duotone fa-handshake-angle"></i> The commands you can use are listed below. Seromitschu wishes you a good time.</span> <br><br>`
            }
        },
        "clear": {
            "usage": `clear`,
            "description": `Allows you to clean the terminal.`,
        },
        "about": {
            "usage": `about`,
            "description": `You can find a short text about me.`,
            "contents": {
              "aboutText": `<span class="yellowText"><i class="fa-duotone fa-hand-wave"></i></span> Hello! My name is Serhat but you can call me Seromitschu <span class="redText"><i class="fa-sharp fa-solid fa-heart"></i></span>.
              I am live in <span class="redText">Turkey</span>. I love playing basketball <span class="blueText"><i class="fa-duotone fa-basketball-hoop"></i></span>, and ride a bike <span class="blueText"><i class="fa-duotone fa-bicycle"></i></span>.`,
            },
        },
        "social": {
            "usage": `social`,
            "description": `My social accounts.`,
            "contents": {
              "socialInfo": `<span class="yellowText"><br><i class="fa-duotone fa-triangle-exclamation"></i> You can use: "<span class="sucess">social --discord or you can use: steam, github, spotify)</span>". </span>`,
              "windowOpenReply": `<i class="fa-solid fa-square-check icone"></i>Window is opened.`,
              "socialText": `<i class="fa-duotone fa-thumbs-up"></i> Below are some of my social media accounts. You can follow me on these accounts`,
              "discord": `<a href='https://discord.com/users/1052654739462049815?utm_source=serhat' target='_blank'>Discord</a> &nbsp;`,
              "discordURL": `https://discord.com/users/1052654739462049815?utm_source=serhat`,
              "steam": `<a href='https://steamcommunity.com/id/seromitschu?utm_source=serhat' target='_blank'>Steam</a> &nbsp;`,
              "steamURL": `https://steamcommunity.com/id/seromitschu?utm_source=serhat`, 
              "spotify": `<a href='https://open.spotify.com/user/dpzbuw7zcqedqxsq6q43z465l?si=e032abd0d6d341eb?utm_source=serhat' target='_blank'>Spotify</a> &nbsp;`,
              "spotifyURL": `https://open.spotify.com/user/dpzbuw7zcqedqxsq6q43z465l?si=e032abd0d6d341eb?utm_source=serhat`,
              "github": `<a href='https://github.com/seromitschu?utm_source=serhat' target='_blank'>GitHub</a> &nbsp;`,
              "githubURL" : `https://github.com/seromitschu?utm_source=serhat`,
            },
        },
        "info": {
          "usage": `info`,
          "description": `Info about quest and website.`,
          "contents": {
            "infoText": `<i class="fa-duotone fa-circle-info"></i> Information received about guest and website`,
            "infoWarn": `<br><span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> This information is strictly not recorded. You can review the <a href="https://github.com/seromitschu/terminal-portfolio" target="_blank">source code.</a></span>`,
          },
        },
        "exit": {
          "usage": `exit`,
          "description": `Closes the terminal page.`,
          "reply": `<i class="fa-solid fa-square-check icone"></i>Terminal is closed.`,
        },
        "joke": {
          "usage": `joke`,
          "description": `Terminal is kidding.`,
        },
        "reload": {
          "usage": `reload`,
          "description": `Refresh the website.`,
        },
        "history": {
          "usage": `history`,
          "description": `Shows the commands you used before.`,
          "reply": `<i class="fa-duotone fa-clock-rotate-left"></i> Previously used commands are`,
          "noFoundReply": `<i class="fa-solid fa-square-xmark error"></i> No history found!`,
          "infoReply": `<br><span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> You can see up to 10 command history and if a particular command has an <i class="fa-solid fa-square-xmark error"></i> ​​next to it, there is no such command.</span>`,
            "clearHistory": {
            "usage": `clear --history`,
            "description": `You delete the commands you used before.`,
            "reply": `<i class="fa-solid fa-square-check sucess"></i> Clearing your history.`,
          },
        },
        "ls": {
          "usage": `ls`,
          "description": `You can see the website files.`,
          "lsText": `<i class="fa-duotone fa-files"></i> Website files`,
          "files": ` <br><br>
          src/assets/websiteIcon.png <br>
          src/assets/screenshot.png <br>
          <span class="greenText">src/css/style.css</span> <br>
          <span class="yellowText">src/js/commands.js</span> <br>
          <span class="yellowText">src/js/404.js</span> <br>
          <span class="redText">404.html</span> <br>
          <span class="redText">index.html</span> <br>
          <span class="blueText">README.md</span> <br>
          <span class="yellowText">server.js</span> <br>
          vercel.json <br>`,
        },
        "music": {
          "usage": `status --music`,
          "description": `Find out the last or current music I listened to.`,
          "contents": {
            "image": `<img width="45%" align="left" src="https://spotify-github-profile.vercel.app/api/view?uid=dpzbuw7zcqedqxsq6q43z465l&cover_image=true&theme=natemoo-re&show_offline=true&background_color=141414&bar_color=ffffff&bar_color_cover=false"/>`,
            "replyText": `<span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> Data is collected via Spotify. </span><br><br>`
          }
        },
        "visitors": {
          "usage": `count --visitors`,
          "description": `Find out the number of visitors.`,
          "contents": {
            "image": `<img  align="left" width="45%" src="https://count.getloli.com/get/@:seromitschu?theme=asoul"> `,
            "replyText": `<span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> Data is collected via Github. </span><br><br>`,
          }
        },
        "blank": `<i class="fa-solid fa-square-xmark error"></i> Please try to write something.`,
        "commandNotFound": `is not available among the commands. Please try the available commands by typing "<span class="sucess">help</span>".`,
    },
    "path": {
        "who": `#user`,
        "preposition": ` in`,
        "file": ` ~/users/@seromitschu`,
    },
    "delays": {
      "system": {
        "getInput": 150,
        "removeInput": 150,
      },
      "welcome": {
        "first": 700,
        "second": 1500,
      },
    },
    "system": {
      "mods": {
        "maintenance": false,
        "maintenanceReply": `<span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> The website is under maintenance due to some bugs or update.</span>`,
      },
    },
  },
}

//// Some Document Settings
document.title = config.seromitschu.website.title;

//// Terminal Functions
function newLine(){
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = config.seromitschu.path.who;
  span1.textContent = config.seromitschu.path.preposition;
  span2.textContent = config.seromitschu.path.file;
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

function trueValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code}: <span class='text'> ${text} </span>`;
  app.appendChild(p);
}

async function openTerminal(){
  console.log(`%c Welcome to the console. You can review information about the commands you are using below.`, `color: #F5544D`);
  createText(config.seromitschu.welcome.image)
  createText(config.seromitschu.welcome.first);
  await delay(config.seromitschu.delays.welcome.first);
  createText(config.seromitschu.welcome.second);
  await delay(config.seromitschu.delays.welcome.second);
  createText(config.seromitschu.welcome.commands);
  newLine();
}

//// Guest Events
app.addEventListener("keypress", async function(event){
  document.title = `typing...`;
  if(event.key === "Enter"){
    await delay(config.seromitschu.delays.system.getInput);
    getInputValue();
    removeInput();
    await delay(config.seromitschu.delays.system.removeInput);
    newLine();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
});

//// Data For The Info Command
//// Browser
const browser = (function() {
  const test = function(regexp) {
      return regexp.test(window.navigator.userAgent);
  }
  switch (true) {
      case test(/edg/i): return `<i class="fa-brands fa-edge"></i> Edge`;
      case test(/opr/i) || test(/opera/i): return `<i class="fa-brands fa-opera"></i> Opera`;
      case test(/chrome/i) && !!window.chrome: return `<i class="fa-brands fa-chrome"></i> Chrome`;
      case test(/MSIE/i): return `<i class="fa-brands fa-internet-explorer"></i> Internet Explorer 10-`;
      case test(/trident/i): return `<i class="fa-brands fa-internet-explorer"></i> Internet Explorer 11`;
      case test(/firefox/i): return `<i class="fa-brands fa-firefox-browser"></i> Firefox`;
      case test(/safari/i): return `<i class="fa-brands fa-safari"></i> Safari`;
      default: return `<i class="fa-regular fa-globe"></i> Other`;
  }
})();

//// Language
var userLang = navigator.language || navigator.userLanguage;

//// OS
function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = '<i class="fa-brands fa-apple"></i> Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = '<i class="fa-brands fa-apple"></i> iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = '<i class="fa-brands fa-windows"></i> Windows';
  } else if (/Android/.test(userAgent)) {
    os = '<i class="fa-brands fa-android"></i> Android';
  } else if (/Linux/.test(platform)) {
    os = '<i class="fa-brands fa-linux"></i> Linux';
  }

  return os;
}

//// Date
const date = Date();

//// Website Path
let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;

//// Window Resolution 
var width = screen.width;
var height = screen.height;
const resolution = `Width: ${width}px, Height: ${height}px`

//// Infos
//// Guest
const browserText = `<br><br> <span class="redText">Guest Browser:</span> ${browser}`;
const langText = `<br> <span class="redText">Guest Language:</span> ${userLang}`;
const osText = `<br> <span class="redText">Guest OS:</span> ${getOS()}`;
const dateText = `<br> <span class="redText">Date & Time:</span> ${date}`;

//// Website
const pathText = `<br><br> <span class="yellowText">Website Path:</span> <a href="${path}">${path}</a>`;
const resolutionText =`<br> <span class="yellowText">Website Resolution:</span> ${resolution}`;
const versionText = `<br> <span class="yellowText">Website Version:</span> ${version}`;
const documentTitleText = `<br> <span class="yellowText">Website Title:</span> ${config.seromitschu.website.title}`;
const authorText = `<br> <span class="yellowText">Website Author:</span> ${config.seromitschu.website.author}`;
const websiteRepoText = `<br> <span class="yellowText">Website Repo:</span> <a href="${config.seromitschu.website.repo}">${config.seromitschu.website.repo}</a>`;

//// Joke Command
var jokes= [
  'Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem',
  'There are only 10 kinds of people in this world: those who know binary and those who don’t.',
  'Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.',
  'A foo walks into a bar takes a look around and says Hello World',
  '0 is false 1 is true right? 1',
  'Things arent always #000000 and #FFFFFF.',
  'What is the most used language in programming? Profanity',
  '!False its funny because its True',
  'You had me at Hello World',
  '2b||!2b',
  'Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted',
  'A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand',
  'How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.',
  'I would love to change the world but they wont give me the source code.',
  'If at first you dont succedd call it version 1.0',
  'Computers make very fast very accurate mistakes',
  'I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.',
  'Knock Knock... Whos there? Art... Art Who? R2D2',
  'Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.'
]

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  return randomJoke;
}

//// Console Log sucess
function consoleSucess(value){
  console.log(`%c Sucess: ${value} - Date & Time: ${Date()}`, `color: #5AD786`);
}

function consoleError(value){
  console.log(`%c Error: ${value} - Date & Time: ${Date()}`, `color: #F78F85`);
}

function consoleWarn(value){
  console.log(`%c Warn: ${value} - Date & Time: ${Date()}`, `color: #FABD2F`);
}

//// History
function saveHistory(value){
  let record = JSON.parse(localStorage.getItem("history")) || [];
  if(record.length > 9){
      record.shift();
      record.push(value);
  }else{
      record.push(value);
  }
  localStorage.setItem("history", JSON.stringify(record));
}

async function commandHistory(){
  let record = JSON.parse(localStorage.getItem("history")) || [];
  if(record.length === 0){
      await createText(config.seromitschu.commands.history.noFoundReply);
  }else{
      await createCode(config.seromitschu.commands.history.reply, "");
      for(let i=0;i<record.length;++i){
          await createText(`<span class="redText">${(i+1).toString()}</span>` + `<span class="redText">.</span> ` + record[i]);
      }
      await createText(config.seromitschu.commands.history.infoReply)
  }
}
// Clear History
async function clearHistory(){
  let record = JSON.parse(localStorage.getItem("history")) || [];
  await createText(config.seromitschu.commands.history.clearHistory.reply);
  record = [];
  localStorage.setItem("history", JSON.stringify(record));
}

//// Commands
async function getInputValue(){
  const value = document.querySelector("input").value;
  //// Maintenance Mod
  if(config.seromitschu.system.mods.maintenance === true){
    falseValue(value);
    document.title = `${config.seromitschu.path.file}/$?`;
    createText(config.seromitschu.system.mods.maintenanceReply);
  }
  //// Help Command
  if(value === config.seromitschu.commands.help.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.help.usage}`;
    createText(config.seromitschu.commands.help.contents.helpText);
    createCode(`<span class="redText">1.</span> ` + config.seromitschu.commands.help.usage, config.seromitschu.commands.help.description);
    createCode(`<span class="redText">2.</span> ` + config.seromitschu.commands.clear.usage, config.seromitschu.commands.clear.description);
    createCode(`<span class="redText">3.</span> ` + config.seromitschu.commands.about.usage, config.seromitschu.commands.about.description);
    createCode(`<span class="redText">4.</span> ` + config.seromitschu.commands.social.usage, config.seromitschu.commands.social.description);
    createCode(`<span class="redText">5.</span> ` + config.seromitschu.commands.info.usage, config.seromitschu.commands.info.description);
    createCode(`<span class="redText">6.</span> ` + config.seromitschu.commands.exit.usage, config.seromitschu.commands.exit.description);
    createCode(`<span class="redText">7.</span> ` + config.seromitschu.commands.joke.usage, config.seromitschu.commands.joke.description);
    createCode(`<span class="redText">8.</span> ` + config.seromitschu.commands.reload.usage, config.seromitschu.commands.reload.description);
    createCode(`<span class="redText">9.</span> ` + config.seromitschu.commands.history.usage, config.seromitschu.commands.history.description);
    createCode(`<span class="redText">10.</span> ` + config.seromitschu.commands.history.clearHistory.usage, config.seromitschu.commands.history.clearHistory.description);
    createCode(`<span class="redText">11.</span> ` + config.seromitschu.commands.ls.usage, config.seromitschu.commands.ls.description);
    createCode(`<span class="redText">12.</span> ` + config.seromitschu.commands.music.usage, config.seromitschu.commands.music.description);
    createCode(`<span class="redText">13.</span> ` + config.seromitschu.commands.visitors.usage, config.seromitschu.commands.visitors.description);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// About Command
  else if(value === config.seromitschu.commands.about.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.about.usage}`;
    createText(config.seromitschu.commands.about.contents.aboutText);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Social Command
  else if(value === config.seromitschu.commands.social.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.social.usage}`;
    createCode(config.seromitschu.commands.social.contents.socialText, `<br><br>` + config.seromitschu.commands.social.contents.discord + config.seromitschu.commands.social.contents.steam + config.seromitschu.commands.social.contents.spotify + config.seromitschu.commands.social.contents.github);
    createText(config.seromitschu.commands.social.contents.socialInfo);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Open Socials
  else if(value === `${config.seromitschu.commands.social.usage} --github`){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.social.usage}`;
    createText(config.seromitschu.commands.social.contents.windowOpenReply);
    window.open(`${config.seromitschu.commands.social.contents.githubURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  else if(value === `${config.seromitschu.commands.social.usage} --steam`){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.social.usage}`;
    createText(config.seromitschu.commands.social.contents.windowOpenReply);
    window.open(`${config.seromitschu.commands.social.contents.steamURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  else if(value === `${config.seromitschu.commands.social.usage} --spotify`){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.social.usage}`;
    createText(config.seromitschu.commands.social.contents.windowOpenReply);
    window.open(`${config.seromitschu.commands.social.contents.spotifyURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  else if(value === `${config.seromitschu.commands.social.usage} --discord`){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.social.usage}`;
    createText(config.seromitschu.commands.social.contents.windowOpenReply);
    window.open(`${config.seromitschu.commands.social.contents.discordURL}`, '_blank');
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Clear Command
  else if(value === config.seromitschu.commands.clear.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.clear.usage}`;
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Info Command
  else if(value === config.seromitschu.commands.info.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.info.usage}`;
    createCode(config.seromitschu.commands.info.contents.infoText, `${config.seromitschu.commands.info.contents.infoWarn}${browserText}${langText}${osText}${dateText} ${pathText}${resolutionText}${versionText}${documentTitleText}${authorText}${websiteRepoText}`);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Exit Command
  else if(value === config.seromitschu.commands.exit.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.exit.usage}`;
    window.close();
    createText(config.seromitschu.commands.exit.reply);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Make a Joke
  else if(value === config.seromitschu.commands.joke.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.joke.usage}`;
    createText(generateJoke());
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Reload 
  else if(value === config.seromitschu.commands.reload.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.reload.usage}`;
    location.reload();
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// History
  else if(value === config.seromitschu.commands.history.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.history.usage}`;
    commandHistory();
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Clear History
  else if(value === config.seromitschu.commands.history.clearHistory.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.history.clearHistory.usage}`;
    clearHistory();
  }
  //// LS
  else if(value === config.seromitschu.commands.ls.usage){
    if(config.seromitschu.system.mods.maintenance === true){
        return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.ls.usage}`;
    createCode(config.seromitschu.commands.ls.lsText, config.seromitschu.commands.ls.files);
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
  }
  //// Music
  else if(value === config.seromitschu.commands.music.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.music.usage}`;
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
    createText(config.seromitschu.commands.music.contents.replyText);
    createText(config.seromitschu.commands.music.contents.image);
  }
  //// Visitors
  else if(value === config.seromitschu.commands.visitors.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    document.title = `${config.seromitschu.path.file}/${config.seromitschu.commands.visitors.usage}`;
    saveHistory(document.querySelector("input").value.trim().toLowerCase());
    createText(config.seromitschu.commands.visitors.contents.replyText);
    createText(config.seromitschu.commands.visitors.contents.image);
  }
  //// Blank
  else if(value === ""){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    falseValue(value);
    consoleError(value);
    document.title = `${config.seromitschu.path.file}/$?`;
    createText(config.seromitschu.commands.blank);
  }
  //// Command Not Found
  else{
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    falseValue(value);
    consoleError(value);
    document.title = `${config.seromitschu.path.file}/$?`;
    createText(`<i class="fa-solid fa-square-xmark error"></i> "<span class="error">${value}</span>" ${config.seromitschu.commands.commandNotFound}`);
    saveHistory(document.querySelector("input").value + `&nbsp; <i class="fa-solid fa-square-xmark error"></i>`.trim().toLowerCase());
  }
}

openTerminal();
