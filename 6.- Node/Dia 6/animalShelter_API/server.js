const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const { error } = require("console");
require("dotenv").config();

const app = new express();
app.use(bodyParser.json());

const { deleteAnimalController } = require("./controllers/animals")

let connection;

/* ENDPOINT OBTENER TODOS */
app.get("/animals/all", async (req, res) => {
  try {
    const [results, fields] = await connection.query("SELECT * FROM animals");
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT OBTENER SEGUN ID */
// app.get("/animals/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [results, fields] = await connection.query(
//       "SELECT * FROM animals WHERE id = ?",
//       [id]
//     );
//     /* Control por si metemos algun id que no este contemplado*/
//     if (!results.length) {
//       res.status(404);
//       throw `No existe ningun animal con id = ${id}`;
//     }
//     res.send(results);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

/* ENDPOINT OBTENER SEGUN ID */
app.get("/animals/:animalType/:id", async (req, res) => {
  try {
    const { animalType } = req.params;
    const [results, fields] = await connection.query(
      "SELECT * FROM animals WHERE animalType = ?",
      [animalType]
    );
    if (!results.length) {
      res.status(404);
      throw `No existe ningun animal ${animalType}`;
    }
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT PARA INTRODUCIR DATOS EN LA BASE DE DATOS */
app.post("/animals/add", async (req, res) => {
  try {
    const { name, animalType, peso, age } = req.body;
    const result = await connection.execute(
      "INSERT INTO animals (name, animalType, peso, age) VALUES (?, ?, ?, ?)",
      [name, animalType, peso, age]
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT PARA ELIMINAR POR ID LOS DATOS DE LA BASE DE DATOS*/
app.delete("/animals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connection.execute(
      "DELETE FROM animals WHERE id = ?",
      [id]
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/* ENDPOINT PARA CAMBIAR NOMBRE A LOS ANIMALES */
app.put("/animals/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const result = await connection.execute(
      `UPDATE animals SET name = ? WHERE id = ?`,
      [name, id]
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
      `APP listening on PORT ${process.env.APP_PORT}\nDB: ${process.env.DB_DATABASE}`
    );
  } catch (e) {
    console.log(e);
  }
});
