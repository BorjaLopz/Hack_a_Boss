const express = require("express");
const app = new express();

app.get("/0", function (req, res) {
  res.send("Hello world!");
});

app.listen(8000);