const args = require("minimist")(process.argv.slice(2));

function listEvents() {
  console.log("Listando eventos...");
}

function addEvents() {
  console.log("Añadiendo evento");
  console.log("Fecha: " + args.date);
  console.log("Texto: " + args.event);
}

try {
  if (args["list-events"]) {
    listEvents();
  } else if (args.date?.length && args.event?.length) {
    addEvents();
  } else {
    throw new Error("Faltan argumentos");
  }
} catch (e) {
  console.log("Hay un error. " + e.message);
}
