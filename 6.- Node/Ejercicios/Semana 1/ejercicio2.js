const parseArgs = require("minimist");

const fs = require("fs");
const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder("utf-8");

const params = parseArgs(process.argv);

const fileName = "dates.csv";
const path = `./${fileName}`;

/* Comprobamos si el fichero existe, si no lo creamos */
if(fs.existsSync(path)){
  console.log("Existe");
}
else
{
  fs.writeFile(fileName, "icon, date, event", (err, fd) => {});
}


/* Guardamos eventos en el .csv*/
const saveEvents = () => {
  if (params.date !== undefined && params.event !== undefined) {
    const date = `\n📅, ${params.date}, ${params.event}`;

    fs.appendFileSync(fileName, date);
  }
};

/* Ordenamos eventos por fecha*/
const sortEvents = () => {
  const data = fs.readFileSync(fileName);
  const decodeText = decoder.write(data);
  const lines = decodeText.split("\n"); //Saltos de linea

  let datesSorted = [];

  for (let i = 1; i < lines.length; i++) {
    const [icon, date, event] = lines[i].split(",");
    datesSorted.push({ icon, date, event });
  }

  datesSorted.sort(sortDates);
  
  /* Mostramos eventos por pantalla */
  print(datesSorted);
};

/* Convertimos las fechas a timestamps para poder organizarlas correctamente */
function sortDates(a, b) {
  return new Date(b.date) - new Date(a.date);
}

/* Mostramos por pantalla */
function print(arr) {
  for (const it of arr) {
    console.log(`${it.icon} ${it.date}: ${it.event}`);
  }
}

if (params.list_event) {
  sortEvents();
}

/* Llamamos a la funcion para poder las fechas y los eventos*/
saveEvents();

