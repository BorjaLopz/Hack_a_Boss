const http = require("http");
const { json } = require("stream/consumers");
const fs = require("fs").promises;
const querystring = require("querystring");

const HOST = "localhost";
const PORT = 3000;

/*PRIMER EJERCICIO*/
/*const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200); //Codgio de HTTP para decir que todo ha ido bien
  res.end(`{ "nombre": "pepe", "apellido": "perez" }`);
  // res.end("My first servereeeeeeee");
  console.log(`{ "nombre": "pepe", "apellido": "perez" }`);

  // console.log(req.url, req.method);

  // res.end(`La peticion es de tipo ${req.method} y el endpoit es ${req.url}`);
  // console.log(
  //   `La peticion es de tipo ${req.method} y el endpoit es ${req.url}`
  // );
};*/

/*CREANDO HTML DESDE UN FICHERO*/
/*
const requestListener = (req, res) => {
  try {
    const html = fs.readFileSync("index.html");
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(html);
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(400);
    res.end(`{"error":} ${e.message}`);
  }
};*/

/*SWITCH CON DISTINTOS METODOS DE HTTP*/
/*
const requestListener = (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        return res.end("Esta request es de tipo GET");

      case "POST":
        return res.end("Esta request es de tipo POST");

      case "PUT":
        return res.end("Esta request es de tipo PUT");

      case "DELETE":
        return res.end("Esta request es de tipo DELETE");

      default:
        throw new Error(`Method ${req.method} not allowed!`);
    }
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(400);
    res.end(`{"error":} ${e.message}`);
  }
};
*/

const getUser = () => {
  return {
    name: "Pedro",
    surname: "Pascal",
    age: 54,
  };
};

/*
const requestListener = (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(getUser()));

      case "POST":
        return res.end("Esta request es de tipo POST");

      case "PUT":
        return res.end("Esta request es de tipo PUT");

      case "DELETE":
        return res.end("Esta request es de tipo DELETE");

      default:
        throw new Error(`Method ${req.method} not allowed!`);
    }
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(400);
    res.end(`{"error":} ${e.message}`);
  }
};
*/


// const getUserByName = (name) => users.find((user) => user.name === name);


/*
const requestListener = (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        const param = res.url.split("/")[2];
        console.log(param);
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(getUserByName(param)));

      case "POST":
        return res.end("Esta request es de tipo POST");

      case "PUT":
        return res.end("Esta request es de tipo PUT");

      case "DELETE":
        return res.end("Esta request es de tipo DELETE");

      default:
        throw new Error(`Method ${req.method} not allowed!`);
    }
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(400);
    res.end(`{"error":} ${e.message}`);
  }
};
*/

const requestListener = (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        const param = querystring.parse("year=2017");
        console.log(param.year);
        console.log(param);
        res.setHeader("Content-Type", "application/json");
        return res.end(`Año ${param.year}`);

      case "POST":
        return res.end("Esta request es de tipo POST");

      case "PUT":
        return res.end("Esta request es de tipo PUT");

      case "DELETE":
        return res.end("Esta request es de tipo DELETE");

      default:
        throw new Error(`Method ${req.method} not allowed!`);
    }
  } catch (e) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(400);
    res.end(`{"error":} ${e.message}`);
  }
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
  console.log(`Server listening in port ${PORT}`);
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
