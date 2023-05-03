const mysql = require("mysql2");
require("dotenv").config();

const express = require("express");
const app = new express();

let connection;

// connection.query("SELECT * FROM equipos", function (error, results, fields) {
//   console.log(results);
//   console.log(fields);
// });

app.listen(process.env.DB_PORT, async () => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, //USE nba;
  });
  console.log(`app listen in port ${process.env.DB_PORT}`);
});

app.get("/", (req, res) => {
  try {
    const prueba = connection.execute("SELECT * FROM equipos");
    // console.log(prueba);
    console.log(process.env.DB_DATABASE);
    console.log(process.env.DB_HOST);
    console.log(process.env.DB_PASSWORD);
    console.log(process.env.DB_PORT);
    console.log(process.env.DB_USER);
    res.status(200).send(prueba);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});
