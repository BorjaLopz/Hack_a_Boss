const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");

const RepositoryFactory = require("./src/db/repositoryFactory");
const {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
} = require("./src/controller/user");
const { reversePassword } = require("./src/middleware/crypt");

require("dotenv").config();

let connection;

const app = new express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.repositoryFactory = new RepositoryFactory(connection);
  next();
});

app.post("/user", reversePassword, createUserController);
app.get("/user/:id", getUserController);
app.put("/user/:id", updateUserController);
app.delete("/user/:id", deleteUserController);

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
