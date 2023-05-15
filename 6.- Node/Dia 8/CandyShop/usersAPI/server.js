const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const UserRepository = require("./repository/user");
const multer = require("multer");
const fs = require("fs/promises");

const { secure, hashPassword } = require("./middlewares/auth");
const {
  registerController,
  loginController,
  getUserController,
  createUserProfileController,
} = require("./controllers/user");

const {
  uploadCandyController,
  getCandyController,
} = require("./controllers/candy");
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

//#region CONFIGURACION MULTER

/* CONFIGURACION MULTER */
const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    cb(null, "img_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please uplaod an image file!"));
    }
    cb(undefined, true);
  },
});
//#endregion FIN CONFIGURACION MULTER

app.post("/user/register", hashPassword, registerController);

app.post("/user/login", loginController);

app.get("/user", secure, getUserController);

app.post("/postImage", upload.single("image"), async (req, res) => {
  try {
    res.send(req.file);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//#region Prueba subiendo una foto
// app.post("/candy/upload", upload.single("image"), async (req, res) => {
//   const image = await fs.readFile(req.file.path);
//   res.end(image);
// });
//#endregion Fin prueba subiendo una foto

app.post("/candy/upload", upload.single("image"), uploadCandyController); //Se podria securizar tambien este endpoint metiendole el middleware "secure" entre el primer args y el segundo.

app.get("/candy/:id", getCandyController);

app.post("/profile/add", upload.single("image"), async (req, res) => {
  try {
    const image = req.file;
    const { bank_account, user_id } = req.body;
    console.log(bank_account);
    const createProfile = await connection.execute(
      "INSERT INTO profile (image, bank_account, user_id) VALUES (?)",
      [image.path, bank_account, user_id]
    );
    return createProfile;
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post(
  "/profile/addRafa",
  upload.single("image"),
  createUserProfileController
);

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
