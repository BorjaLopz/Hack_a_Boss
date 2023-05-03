const express = require("express");
const mysql = require("mysql2/promise");
const { getAllProductsController } = require("./src/controller/products");
const RepositoryFactory = require("./src/db/repositoryFactory");

require("dotenv").config();

let connection;

const app = new express();

app.use((req, res, next) => {
  req.repositoryFactory = new RepositoryFactory(connection);
  next();
});

app.get("/", getAllProductsController);

app.listen(process.env.APP_PORT, async () => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  console.log(`App listen to port ${process.env.APP_PORT}`);
});
