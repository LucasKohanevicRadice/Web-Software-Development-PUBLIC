import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import * as songController from "./controllers/songController.js"

const router = new Router()

router.get("/songs", songController.getSongs)
router.get("/songs/:id", songController.getSingleSong)
router.post("/songs", songController.postSong)
router.delete("/songs/:id", songController.deleteSong)


export { router }  