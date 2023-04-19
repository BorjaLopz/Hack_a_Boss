const fs = require("fs");
const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder("utf-8");

const fileName = `animals.csv`;

// fs.readFile(fileName, decoder, (err, data) =>
// {
//     if(err)
//     {
//         console.error(err);
//     return;
//     }
//     const decodeText = decoder.write(data);
//     // console.log(decodeText)
//     const lines = decodeText.split("\n");
//     // console.log(lines);
//     const keys = lines[0].split(",");
//     // console.log(keys);

//     for(let i = 1; i < lines.length; i++)
//     {
//         const [name, heigth, weight, habitat] = lines[i].split(",");
//         console.log(`El ${name} mide${heigth}cm, pesa${weight}kg y vive en${habitat}.`);
//     }

//     console.log(data);
// });

/*
fs.writeFile(fileName, "\ndata", {flag: "a+"}, err => {
    if(err)
    {
        console.error(err);
        return;
    }
    console.log(`${fileName} actualizado con exito!`);
})
*/

// console.log("Escribe tu nombre: ");
// const stdin = process.openStdin();

// stdin.addListener("data", (data) =>
// {
//     console.log("Tu nombre es: " + data.toString());
// })

// const readLine = require("readline").createInterface({
//     input: process.stdin,
//     outpunt: process.stdout
// });

// readLine.question("Who are you?", name => {
//     console.log(`Hey there ${name}`);
//     readLine.close();
// })

const readAnimalsFromCSV = () => {
  const data = fs.readFileSync(fileName);
  const decodeText = decoder.write(data);
  const lines = decodeText.split("\n");
  for (let i = 1; i < lines.length; i++) {
    const [name, height, weight, habitat] = lines[i].split(",");
    console.log(
      `El ${name} mide${height}cm, pesa${weight}kg y vive en${habitat}`
    );
  }
};

const writeAnimalsInsideCSVFromConsole = () => {
  /* Permitimos al programa leer lo que el usuario mete por consola*/
  /* Empezamos en el argumento 2 ya que el argumento 0 es la palabra node, el argumento 1 es el nombre del programa "app.js" */
  const animal = `\n${process.argv[2]}, ${process.argv[3]}, ${process.argv[4]}, ${process.argv[5]}`;

  /* Lo agregamos al final del fichero, para poder tener nuestras keys en la linea 0*/
  fs.appendFileSync(fileName, animal);
};

writeAnimalsInsideCSVFromConsole();
readAnimalsFromCSV();
