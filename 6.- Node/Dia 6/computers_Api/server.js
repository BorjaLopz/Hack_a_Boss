const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
require("dotenv").config();

const { updateComputerController } = require("./controllers/computers");

const app = new express();
app.use(bodyParser.json());

let connection;

app.use((req, res, next) => {
  req.connection = connection;
  next();
});

/* ENDPOINT para obtener todos los ordenadores de la base de datos*/
app.get("/computers/all", async (req, res) => {
  try {
    /* Destructuring posicional, solamente necesitamos el primer elemento. Le podemos dar el nombre que consideremos oportuno. El segundo campo son metadatos, es decir, nos da informacion sobre cada campo que tenemos en la base de datos, si es varchar, int, float, etc...*/
    const [results, fields] = await connection.query("SELECT * FROM computers");
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT para obtener determinado ordenador de la base de datos*/
app.get("/computers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    /* Destructuring posicional, solamente necesitamos el primer elemento. Le podemos dar el nombre que consideremos oportuno. El segundo campo son metadatos, es decir, nos da informacion sobre cada campo que tenemos en la base de datos, si es varchar, int, float, etc...*/
    const [results, fields] = await connection.query(
      "SELECT * FROM computers WHERE id = ?",
      id
    );
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* MIDDLEWARE */
const updateParamsMiddleware = (req, res, next) => {
  const paramsValue = []; //["asus rock", "brand"]
  let bodyKeys = Object.keys(req.body);
  // console.log(bodyKeys);
  const updateParamsArray = bodyKeys
    .map((key) => {
      if (key) {
        paramsValue.push(req.body[key]);
        return `${key}=?`;
      }
    })
    .filter((params) => params); //Quitamos todos los undefined gracias a filter  [name=?, brand=?]
  if (updateParamsArray.length === 0) {
    res.status(500).send("No params found for update!");
  }
  req.updateParams = updateParamsArray.join(","); //name=?, brand=?
  next();
};

/* ENDPOINT para actualizar */
app.put("/computers/:id", updateParamsMiddleware, async (req, res) => {
  try {
    const { updateParams } = req;
    const id = req.params.id;
    console.log(id);
    console.log(`UPDATE computers SET ${updateParams} WHERE id = (${id})`);
    // const { id } = req.params;
    const result = await connection.execute(
      `UPDATE computers SET ${updateParams} WHERE id = ?`,
      paramsValue
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT para poder introducir un dato en la base de datos*/
app.post("/computers/add", async (req, res) => {
  try {
    const { name, brand, price, stock } = req.body;
    const result = await connection.execute(
      "INSERT INTO computers (name, brand, price, stock) VALUES (?, ?, ?, ?)",
      [name, brand, price, stock] //Una opcion sera dejarlo a cholon asi: [req.body.name, req.body.brand, req.body.price, req.body.stock], o podemos hacer destructuring antes del campo body para poder hacerlo comodamente
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT para poder borrar */
app.delete("/computers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connection.execute(
      "DELETE FROM computers WHERE id = ?",
      [id]
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* SERVER */
app.listen(process.env.APP_PORT, async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
    });
    console.log(
      `App listening on port ${process.env.APP_PORT}\nDB: ${process.env.DB_DATABASE}`
    );
  } catch (e) {
    console.log(e);
  }
});
