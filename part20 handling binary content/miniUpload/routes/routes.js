import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import * as formController from "./controllers/formController.js";
import * as fileController from "./controllers/fileController.js"

const router = new Router();

router.get("/", formController.viewForm);
router.post("/", fileController.uploadFile) 
router.post("/files", fileController.getFileData)

export { router };
 