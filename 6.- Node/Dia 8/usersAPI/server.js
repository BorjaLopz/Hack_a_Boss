const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const UserRepository = require("./repository/user");
const multer = require("multer");
const fs = require("fs/promises");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalName);
  },
});

const upload = multer({ storage });

const { secure, hashPassword } = require("./middlewares/auth");
const {
  registerController,
  loginController,
  getUserController,
} = require("./controllers/user");
const { uploadCandyController, getCandyController, rotateCandyController} = require("./controllers/candy");
const CandyRepository = require("./repository/candy");

require("dotenv").config();
const app = new express();

let connection;

app.use(bodyParser.json());

app.use((req, res, next) => {
  const userRepository = new UserRepository(connection);
  const candyRepository = new CandyRepository(connection);
  req.userRepository = userRepository;
  req.candyRepository = candyRepository;
  next();
});

app.post("/user/register", hashPassword, registerController);

app.post("/user/login", loginController);

app.get("/user", secure, getUserController);

app.post("/candy/upload", upload.single("image"), uploadCandyController);

app.get("/candy/rotate/:id", rotateCandyController);

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
