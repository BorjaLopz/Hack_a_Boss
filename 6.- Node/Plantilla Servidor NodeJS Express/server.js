const express = require("express");
const mysql = require("mysql2/promise"); //Le decimos que vamos a trabajar con async, await y demas.
const { getAllProductsController } = require("./src/controllers/products");
const RepositoryFactory = require("./src/db/repositoryFactory");

require("dotenv").config();

let connection; //Variable de conexion

const app = new express(); //Instancia de express

app.use((req, res, next) => {
  req.repositoryFactory = new RepositoryFactory(connection);
  next(); //De esta manera seguirá la conexion.
});

app.get("/", getAllProductsController);

/* SERVER */
app.listen(process.env.APP_PORT, async () => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  });
  console.log(`App listen to port ${process.env.APP_PORT}`);
});
