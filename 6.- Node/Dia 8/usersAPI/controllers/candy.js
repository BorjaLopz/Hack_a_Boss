const fs = require("fs/promises");
const sharp = require("sharp");

const uploadCandyController = async (req, res) => {
  // const image = await fs.readFile(req.body.file);
  try {
    const candy = await req.candyRepository.createCandy({
      name: req.body.name,
      filename: req.file.path,
    });
    res.end(image);
  } catch (e) {
    throw e;
  }
};

const getCandyController = async (req, res) => {
  try {
    const candy = await req.candyRepository.getCandy(parseInt(req.params.id));
    const image = await fs.readFile(candy.image);
    req.end(image);
  } catch (e) {
    throw e;
  }
};

const rotateCandyController = async (req, res) => {
  try {
  } catch (e) {
    throw e;
  }
};

module.exports = {
  uploadCandyController,
  getCandyController,
  rotateCandyController,
};
