const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = new express();

app.use(bodyParser.json());

const { twoDigitsTime, getFullPath } = require("./helpers");

app.get("/error-forzado", (req, res, next) => {
  return next(new Error("Este es un error generado intencionadamente"));
});

/* Obtenemos la hora actual  */
app.get("/currentTime", (req, res) => {
  try {
    const actualHour = new Date();
    console.log(actualHour);
    res
      .status(200)
      .send(
        `Hora actual: ${twoDigitsTime(actualHour.getHours())}:${twoDigitsTime(
          actualHour.getMinutes()
        )}:${twoDigitsTime(actualHour.getSeconds())}`
      );
  } catch {
    console.log(e);
    res.status(e.status).send(`{"message": e.message}`);
  }
});

/* Obtenemos el path completo del directorio */
app.get("/serverPath", (req, res) => {
  try {
    console.log(`${__dirname}`);
    res.status(200).send(`${__dirname}`); //${__dirname}
  } catch (e) {
    console.log(e);
    res.status(e.status).send(`{"message": e.message}`);
  }
});

/* Obtencion del metodo y de la URL del middleware*/
app.get("/middleware", (req, res, next) => {
  try {
    // getFullPath(req); //Debug
    res.status(200).send(`Metodo: ${req.method}\nURL: ${getFullPath(req)}`);
    next(); //Permitimos seguir
  } catch (e) {
    console.log(e);
    res.status(e.status).send(`{"message": e.message}`);
  }
});

/* Manejador de errores 404*/
app.get("*", function (req, res) {
  res.status(404).send("Pagina no encontrada!");
});

/* Manejador de resto de errores */
function errorHandler (err, req, res, next) {
  console.log(`error ${err.message}`);
  const status = err.status || 400;
  res.status(status).send(err.message);
}

/* El middleware de manejo de errores se define al final, después de otras llamadas de rutas y app.use() */

/* Middleware que gestione errores*/
app.use(errorHandler);


/* Puerto del server */
app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to http://${process.env.HOST}:${process.env.PORT}`
  );
});
