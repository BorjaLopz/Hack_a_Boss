import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000; //O lo coge del .env o lo damos el puerto por defecto
const imagesFolderName = "uploads";

export { port, imagesFolderName };
