const fs = require("fs/promises");

//funcion que coprueba que una ruta exista

async function pathExist(path) {
  try {
    await fs.access(path);
  } catch {
    throw new Error(`La ruta ${path} no existe`);
  }
}

async function createPathIfNotExists(path) {
  try {
    await fs.access(path);
  } catch {
    await fs.mkdir(path);
  }
}

module.exports = {
  pathExist,
  createPathIfNotExists,
};
