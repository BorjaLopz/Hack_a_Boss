const http = require("http");

/* NECESARIO PARA LEER ARCHIVOS DEL SISTEMA */
const fs = require("fs").promises;

const host = "localhost";
const port = 8080;

/* CREANDO NUESTRO SERVER */

/*
const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("My first server!");
}
*/

/* DEVOLVIENDO UN JSON */

/*
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is JSON response"}`);
};
*/

/* DEVOLVIENDO UN CSV */

/*
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
  res.writeHead(200);
  res.end(`id, name, email\n1, Samy Shark, shark@ocean.com`)
}
*/

/* GENERANDO UN HTML */
/*
const requestListener =  function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end("<html><body><h1>This is HTML</h1></body></html>");
}
*/

/* CARGANDO UN HTML DESDE UN FICHERO */
/*
const requestListener = function (req, res) {
  fs.readFile(__dirname + "/index.html").then((contents) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
  }).catch(err => {
    res.writeHead(500);
    res.end(err);
    return;
  })
};
*/

/* AÑADIENDO HTML DE MANERA EFICIENTO */

/*
let indexFile;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};
*/

const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countrOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countrOfBirth: "Lebanon", yearOfBirth: 1883 },
]);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/books":
      res.writeHead(200);
      res.end(books);
      break;
    case "/authors":
      res.writeHead(200);
      res.end(authors);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
};

//#endregion
/* PARTE DE LOS SERVERS */
//#region

/* PRIMERA APROXIMACION A LOS SERVER */
/*
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
*/

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http//:${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });
