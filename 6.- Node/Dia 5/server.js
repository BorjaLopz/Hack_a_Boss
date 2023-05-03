const express = require("express");
const mysql = require("mysql2/promise"); //Le decimos que vamos a trabajar con async, await y demas.
const {
  getAllUsersController,
  addUserController,
  getUserByIdController,
  deleteUserController,
  updateUserController,
} = require("./src/controllers/products");
const UsersFactory = require("./src/db/repositoryFactory");
const { reversePassword } = require("./src/middlewares/crypt");
/* De esta manera haremos un parseo del documento*/
const bodyParser = require("body-parser");

require("dotenv").config();

let connection; //Variable de conexion

const app = new express(); //Instancia de express

/* USAMOS EL PARSEADOS DE JSON*/
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.repositoryFactory = new UsersFactory(connection);
  next(); //De esta manera seguirá la conexion.
});

/* Obtencion de todos los usuarios en la base de datos*/
app.get("/", getAllUsersController);

/* Obtenemos usuario por ID*/
app.get("/:id", getUserByIdController);

/* Añadimos usuario en la base de datos*/
/* PRIMERA APROXIMACION */

app.post("/", (req, res) => {
  /* CREAMOS EL USUARIO*/
  const newUser = {
    // id: req.body.id,
    username: req.body.username,
    password: req.body.password,
  };

  const { username, password } = newUser;

  let sql = `INSERT INTO usuarios(name, password) VALUES (?)`;
  let value = [username, password];
  connection.query(sql, [value], function (e, res) {
    if (e) throw e;
    console.log("Number de filas afectadas: " + result.affectedRows);
  });

  res.status(200).send(newUser);
});

/* Añadimos usuario */
// app.post("/add", reversePassword, addUserController);  //Falla con el middleware
app.post("/add", addUserController);

/* Borramos usuario */
app.delete("/:id", deleteUserController);

app.put("/:id", updateUserController);

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
