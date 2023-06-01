import express from "express";
import toUpload from "../middlewares/toUploadMiddleware.js";
import { home, uploadFile} from "../controllers/mainController.js";

const router = express.Router();

//GET /
router.get("/", home);

//POST /upload
router.post("/upload", toUpload, uploadFile);

export default router;
