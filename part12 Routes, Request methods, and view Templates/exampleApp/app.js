import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import renderMiddleware from "./middlewares/renderMiddleware.js";
import * as nameService from "./services/nameService.js";

const app = new Application();
const router = new Router();

app.use(renderMiddleware);

const listNames = async ({ render }) => {
  render("index.eta", { names: await nameService.findAll() });
};

const addName = async ({ request, response }) => {
  const body = request.body();
  const params = await body.value;

  await nameService.add(params.get("name"));

  response.redirect("/");
};

router.get("/", listNames);
router.post("/", addName);

app.use(router.routes());

<<<<<<< HEAD
<<<<<<< HEAD
app.listen({ port: 7778 });
=======
app.listen({ port: 7777 });
>>>>>>> parent of 0d70899 (up)
=======
app.listen({ port: 7777 });
>>>>>>> parent of 0d70899 (up)
