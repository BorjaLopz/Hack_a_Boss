import FileSystem from "fs";
const fs = FileSystem.promises;
import { imagesFolderName } from "../config.js";

//Obtenemos todos los archivos subidos en el servidor
async function home(req, res, next) {
  try {
    const filesUploaded = await fs.readdir(imagesFolderName, (files) => files);
    res.status(200).send({ status: "ok", data: filesUploaded });
  } catch (e) {
    // console.log(e);
    next(e);
  }
}

//Subimos archivos
function uploadFile(req, res, next) {
  try {
    const data = req.file.filename;
    res.status(200).send({ status: "ok", data });
  } catch (e) {
    next(e);
    //   console.log(e);
    //   res.status(400).send(e);
  }
}

export { home, uploadFile };
