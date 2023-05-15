const fs = require("fs/promises");

const uploadCandyController = async (req, res) => {
  // const image = await fs.readFile(req.file.path);
  try {
    const candy = await req.candyRepository.createCandy({
      name: req.body.name,
      filename: req.file.path,
    });
    console.log(name);
    console.log(filename);

    res.send(candy);
  } catch (e) {
    console.log("HOLAAA");
    res.status(500).send(e.message);
  }
};

const getCandyController = async (req, res) => {
  try {
    const candy = await req.candyRepository.getCandy(parseInt(req.params.id));
    const image = await fs.readFile(candy.image);
    res.end(image);
  } catch (e) {
    res.status(500).send(e.message)
  }
}

module.exports = { uploadCandyController, getCandyController };
