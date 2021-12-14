// Respond with amount of uploaded files

import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import renderMiddleware from "./middlewares/renderMiddleware.js";

const app = new Application();
const router = new Router();

app.use(renderMiddleware);

const showForm = ({ render }) => {
  render("index.eta");
};

const processUpload = async ({ request, response }) => {
  // implement the functionality here 

  const body = request.body({type: "form-data"})
  console.log("--body..")
  console.log(body)

  const reader = await body.value
  console.log("--reader..")
  console.log(reader)

  const data = await reader.read()


  console.log("--data")
  console.log(data)

  const fileDetails = data.files[0]
  const amountOfFiles = data.files.length

  console.log("-- FileDetails")
  console.log(fileDetails)
  console.log(`Amount of files: ${amountOfFiles}`)

  response.body = amountOfFiles

};

router.get("/", showForm);
router.post("/", processUpload);

app.use(router.routes());
app.listen({ port: 7777 });

// Respond with uploaded content type

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const showForm = ({ render }) => {
//   render("index.eta");
// };

// const processUpload = async ({ request, response }) => {
//   // implement the functionality here

//   const body = request.body({type: "form-data"})
//   console.log("--body..")
//   console.log(body)

//   const reader = await body.value
//   console.log("--reader..")
//   console.log(reader)

//   const data = await reader.read()


//   console.log("--data")
//   console.log(data)

//   const fileDetails = data.files[0] 

//   console.log("-- FileDetails")
//   console.log(fileDetails)

//   response.body = fileDetails.contentType

// };

// router.get("/", showForm);
// router.post("/", processUpload);

// app.use(router.routes());
// app.listen({ port: 7777 });


// Sending false data

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();

// const data = {
//   name: "Karen Spärck Jones",
//   yearOfBirth: 1935,
//   title: "Professor",
// };

// const sendData = ({ response }) => {
//   response.body = data;
//   response.headers.set("Content-Type", "application/zip")
// };

// app.use(sendData);

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;
 