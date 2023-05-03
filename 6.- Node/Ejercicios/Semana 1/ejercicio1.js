const parseArgs = require("minimist");
const prompt = require("prompt-sync")();

const params = parseArgs(process.argv);

function saludar(nombre = "") {
  const nameCapitalized = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  console.log(`¡Hola${nombre === "" ? "!" : ` ${nameCapitalized}!`}`);
}

function howAreYou() {

  let bflag = false;

  do {
    let state = prompt("¿Como estas? ").toLowerCase();
    
    switch(state){
    case "bien":
      console.log("Fantástico!");
      bflag = false;
      break;
    case "mal":
      console.log("Animo. Todo ira a mejor!");
      bflag = false;
      break;
    default:
      console.log("Lo siento, no te he entendido.");
      bflag = true;
      break;
      }
    } while(bflag);
}

saludar(params.name);
howAreYou();

