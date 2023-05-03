const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { hashPassword, secure } = require("./middlewares/auth");
const {
  registerController,
  loginController,
  getUserController,
} = require("./controllers/users");
const { UserRepository } = require("./repository/user")

require("dotenv").config();
let connection;

/* MIDDLEWARE GLOBAL. Guardamos en req.connection la connection */
const app = new express();
app.use((req, res, next) => {
  const userRepository = new UserRepository(connection)
  req.connection = userRepository;
  next();
})
app.use(bodyParser.json());


/* POST PARA INSERTAR EN LA BASE DE DATOS */
app.post("/user/register", hashPassword, registerController);

/* POST PARA LOGEAR UN USUARIO*/
app.post("/user/login", loginController);

/* GET PARA OBTENER LA INFORMACION DE UN USUARIO */
app.get("/user", secure, getUserController);

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
