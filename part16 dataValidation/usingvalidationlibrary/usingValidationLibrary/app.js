import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import renderMiddleware from "./middlewares/renderMiddleware.js";
import {
  required,
  validate,
  minLength,
  numberBetween,
} from "https://deno.land/x/validasaur@v0.15.0/mod.ts";

const app = new Application();
const router = new Router();

app.use(renderMiddleware);

const showForm = ({ render }) => {
  render("index.eta", { errors: [], name: "", yearOfBirth: "" });
};

const validationRules = {
  name: [required, minLength(4)],
  yearOfBirth: [required,numberBetween(1900,2000)]
}



const submitForm = async ({ request, response, render }) => {
  const body = request.body();
  const params = await body.value;

  const data = {
    errors: [],
    name: params.get("name"),
    yearOfBirth: Number(params.get("yearOfBirth"))
  }

  const [passes,errors] = await validate(data,validationRules)

  if (!passes) {
    
    for (const [key,value] of Object.entries(errors)) {

      for (const [key, valuee] of Object.entries(value)) {
        data.errors.push(valuee) 
      }
    }
  
  }

  else {
    response.redirect("/")
  }

  render("index.eta", data)

};

router.get("/", showForm);
router.post("/", submitForm);

app.use(router.routes());

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app;
