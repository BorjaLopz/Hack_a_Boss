const prompt = require("prompt-sync")();
const parseArgs = require("minimist");

let { name } = parseArgs(process.argv.slice(2));

/* SALUDAR */
//Primera opcion: con if
if (name?.length) {
  //Añadimos la interrogacion para hacer las veces de operador Optional Chaining
  console.log(`Hola ${name}`);
} else {
  console.log(`Hola`);
}

//Segunda opcion: Con un ternario
console.log(`Hola ${name?.length > 0 ? `${name}` : ``}`);

/* FUNCION DE PREGUNTAR */
function ask() {
  try {
    let mood = prompt("¿Qué tal? ").toLowerCase();

    if(!mood){
      console.log("Adios!");
      return; 
    }

    switch (mood) {
      case "bien":
        console.log("Me alegro :)");
        break;
      case "mal":
        console.log("Que pena :(");
        break;
      default:
        console.log("Lo siento, no te he entendido");
        ask();
        break;
    }
    console.log(mood);
  } catch (e) {
    console.error(`Ha habido un error!` + e.message);
  }
}

ask();
