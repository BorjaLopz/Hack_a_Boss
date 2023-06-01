//Common JS
//const express = require("express");

//ES Modules
import express from "express";
import dotenv from "dotenv"; //Se convierte en una constante cuando importamos asi
import cors from "cors"; //Importamos cors para solamente permitir peticiones desde ciertas direcciones

import { port, imagesFolderName } from "./config.js";
import mainRoutes from "./routes/mainRoutes.js";
const app = express();
dotenv.config();

app.use(cors());

//Hacemos que los archivos que esten dentro de la carpeta uploads sea visible de manera estatica para el servidor.
app.use("/uploads", express.static(imagesFolderName));

app.use(mainRoutes);

app.use((err, req, res, next) => {
  console.log("Error: " + err.message);
  //Para los errores internos debemos de poner el error 500 (error interno del servidor)
  res.status(500).send({ status: "error", message: err.message });
});

app.use((req, res) => {
  res.status(404).send({ status: "Error", message: "Ruta no encontrada" });
});

//Servidor
app.listen(port, () => console.log(`\n\tServer listening at port ${port}\n`));
