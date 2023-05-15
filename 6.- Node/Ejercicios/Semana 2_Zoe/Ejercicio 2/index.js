const express = require("express");
const cors = require("cors");
const app = new express();
const port = 8080;

app.use(cors());

// Escribe aquí el código solicitado

const { listEventsControllers, addEventControllers } = require("./controllers");
app.use(express.json());

//Endpoints
app.get("/list", listEventsControllers);

app.post("/new", addEventControllers);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
