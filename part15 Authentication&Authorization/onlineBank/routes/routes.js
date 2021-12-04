import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import * as authenticationController from "./controllers/authenticationController.js";
import * as mainController from "./controllers/mainController.js";

const router = new Router();

router.get("/", mainController.showMain);
router.get("/accounts", authenticationController.showAccounts)
router.post("/accounts", authenticationController.postNewAccount)
router.get("/accounts/:id", authenticationController.showSingleAccount)
router.post("/accounts/:id/deposit", authenticationController.depositToAccount)
router.post("/accounts/:id/withdraw", authenticationController.withdrawFromAccount)


router.get("/auth/register", authenticationController.showRegistrationForm);
router.post("/auth/register", authenticationController.postRegistrationForm);
router.get("/auth/login", authenticationController.showLoginForm);
router.post("/auth/login", authenticationController.postLoginForm);

export { router }; 
