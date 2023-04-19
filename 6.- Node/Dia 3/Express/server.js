const express = require("express");
require("dotenv").config();

const app = new express();

app.get("/greeting/:name/:age")

// app.listen(process.env.PORT, () => {
//     console.log(`Server listening to port ${process.env.PORT}`);
// })

app.get("/hello", function (req, res) {
  res.send("Hello world");
});

app.listen(8000);
