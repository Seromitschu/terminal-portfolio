const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

//// Config*
const config = {
  "seromitschu": {
    "website": {
      "title": `Seromitschu Error`,
    },
    "welcome": {
        "first": `<span class="redText"><i class="fa-duotone fa-bug"></i> We have a problem. The page you requested cannot be found right. Try go back.</span>`,
        "second": `<span class="yellowText"><i class="fa-duotone fa-triangle-exclamation"></i> Type "<span class="sucess">back --homepage</span>" if you want to come back.`
    },
    "commands": {
        "goHomepage": {
          "usage": `back --homepage`,
          "homePageURL": `index.html`
        },
        "blank": `<i class="fa-solid fa-square-xmark error"></i> Please try to write something.`,
        "commandNotFound": `is not available among the commands. Please try the "<span class="sucess">back --homepage</span>".`,
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
        "maintenance": true,
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
  createText(config.seromitschu.welcome.first);
  await delay(config.seromitschu.delays.welcome.first);
  createText(config.seromitschu.welcome.second);
  await delay(config.seromitschu.delays.welcome.second);
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

//// Commands
async function getInputValue(){
  const value = document.querySelector("input").value;
  //// Maintenance Mod
  if(config.seromitschu.system.mods.maintenance === true){
    falseValue(value);
    document.title = `${config.seromitschu.path.file}/$?`;
    createText(config.seromitschu.system.mods.maintenanceReply);
  }
  //// Back Homepage Command
  if(value === config.seromitschu.commands.goHomepage.usage){
    if(config.seromitschu.system.mods.maintenance === true){
      return;
    }
    trueValue(value);
    consoleSucess(value);
    location.href = `${config.seromitschu.commands.goHomepage.homePageURL}`
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
  }
}

openTerminal();
