import multer from "multer";
import path from "path";

import { imagesFolderName } from "../config.js";

//Configuracion de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./" + imagesFolderName);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      // file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Este sera nuestro middleware para definir que multer va a ocupar la configuraion de storage. El nombre del campo que vamos a utilizar a traves de postman, se va a llamar "myFile", si no no se podra subir nada y dara fallo.
const toUpload = multer({ storage }).single("myFile");

export default toUpload;
