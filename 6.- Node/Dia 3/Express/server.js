const express = require("express");
require("dotenv").config();

const app = new express();

app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT}`);
})