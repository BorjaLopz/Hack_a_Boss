const parseArgs = require("minimist");
const sharp = require("sharp");
const fs = require("fs");
const params = parseArgs(process.argv);

//Tamaño pequeño 200px
//Tamaño medio 500px
//Tamaño medio 500px y ByN

const { image: ImageFilename, resize: ImageResize, BW: BlackandWhite } = params;

// console.log(ImageFilename);
// console.log(ImageResize)
// console.log(BlackandWhite)

const manipulateImg = (fileName, resize, BW) => {
  try {
    if (!BW) {
      const [file, format] = fileName.split(".");
      // console.log(file + "_" + resize + "px." + format);
      sharp("./" + fileName)
        .resize({ width: resize })
        .toFile(file + "_" + resize + "px." + format)
        .then(() => console.log("Archivo creado!"));
    } else {
      const [file, format] = fileName.split(".");
      // console.log(file + "_" + resize + "px." + format);
      sharp("./" + fileName)
        .resize({ width: resize })
        .grayscale()
        .toFile(file + "_" + resize + "px_B&W." + format)
        .then(() => console.log("Archivo creado!"));
    }
  } catch (e) {
    console.log(e);
  }
};

manipulateImg(ImageFilename, ImageResize, BlackandWhite);

