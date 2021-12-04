// testing saving 

// Ticketing system

import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import renderMiddleware from "./middlewares/renderMiddleware.js";
import * as ticketService from "./services/ticketService.js";

const app = new Application();
const router = new Router();

app.use(renderMiddleware);

const listTickets = async ({ render }) => {
    render("index.eta", { tickets: await ticketService.findAll() })
}

const addTicket = async ({ request, response }) => {

    const body = request.body()
    const params = await body.value

    await ticketService.add(params.get("content"))

    response.redirect("/tickets")
}

// const logResolve = async ({params, response}) => {

//     console.log(params.id)
//     console.log(typeof(params.id))

//     response.redirect("/tickets")
    

// }

const resolveTicket = async ({ params, response}) => {

    const id = Number(params.id)

    await ticketService.resolve(id)

    response.redirect("/tickets")

}

const deleteTicket = async ({ params, response }) => {

    const id = Number(params.id)

    await ticketService.deleteTicket(id)

    response.redirect("/tickets")

}

router.get("/tickets", listTickets);
router.post("/tickets", addTicket)
router.post("/tickets/:id/resolve", resolveTicket)
router.post("/tickets/:id/delete", deleteTicket)

app.use(router.routes());

app.listen({ port: 7777 });

export default app

// content in a story

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const data = {

//   person: "Batman",
//   emotion: "tired",

// }

// const viewForm = ({ render }) => {
//   render("index.eta", data);
// };

// const viewStory = async ({request, response}) => {


//       const body = request.body()
//       const params = await body.value

//       data.person = params.get("name")
//       data.emotion = params.get("emotion")

//       let story = `Waking up, ${data.person} felt ${data.emotion}. ${data.person} had spent most of the previous evening with friends, and recalled that they were writing an application. ${data.person} had an inkling that the application had something to do with brainwaves, but simply could not recall what. The feeling, being ${data.emotion}, must have had something to do with the application.`


//       response.body = story

// }

// router.get("/", viewForm);
// router.post("/", viewStory)

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// Sum of two submitted numbers

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const viewForm = ({ render }) => {
//   render("index.eta");
// };

// const viewSubmittedSum = async ({request, response}) => {

//   const body = request.body()
//   const params = await body.value

//   const first = Number(params.get("first"))
//   const second = Number(params.get("second"))
//   const sum = first+second
  
//   response.body = sum

// }

// router.get("/", viewForm);
// router.post("/", viewSubmittedSum)


// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// // Showing submitted content

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const data = {
//   content: "pippeli",
// }

// const viewForm = ({ render }) => {
//   render("index.eta", data);
// };

// const changeContent = async ({request, response}) => {

//   const body = request.body()
//   const params = await body.value
//   data.content = params.get("content")
//   response.body = data.content
// }

// router.get("/", viewForm);
// router.post("/",changeContent)

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

// Path variables in a story

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const data = {

//   person: "Batman",
//   feeling: "tired"

// }

// const viewStory = ({ render }) => {

//   data.person = "Batman"
//   data.feeling = "tired"

//   render("index.eta", data);
// };

// const moddedStory = ({ params, render }) => {

    
//     data.person = params.name
//     data.feeling = params.emotion

//     render("index.eta", data)

// }

// router.get("/", viewStory)
//       .get("/name/:name/emotion/:emotion", moddedStory);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// fixing bugs

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware)

// const data = {
//   name: "Jane",
// };

// const greet = ({render}) => {
//   render("index.eta", data);
// };

// router.get("/", greet);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// Changing text

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const data = {
//   message: "Hello Eta Templates!",
// };

// const greet = ({ render }) => {
//   render("index.eta", data);
// };

// router.get("/", greet);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// // redirecting to names

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// const redirect = ({ response }) => {
//   response.redirect("/names")
// };

// const heyYou = ({ response }) => {

//   response.body = "Hello names!"

// }

// router.get("/", redirect)
//       .get("/names", heyYou)
//       .post("/names", redirect)

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

//  Three two one liftoff

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// let count = 1

// const message = ({ response }) => {

//   if (count === 1) {
//     response.body = "Three..."
//     count ++
//   }

//   else if (count === 2) {
//     response.body = "Two..."
//     count ++
//   }

//   else if (count === 3) {
//     response.body = "One..."
//     count ++
//   }

//   else if (count >= 4) {
//     response.body = "Liftoff!"
//     count ++
//   }


// };

// router.get("/", message);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


//  YES / NO

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// let count = 0



// const message = ({ response }) => {

//   const yes = "Yes"
//   const no = "No"

//   if (count % 2 === 0) {
//     response.body = yes
//     count += 1
//   }

//   else {
//     response.body = no
//     count += 1
//   }

// };

// router.get("/", message);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

//  Names 

// import { Application} from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { errorMiddleware } from "./middlewares/errorMiddleware.js";
// import { router } from "./routes/routes.js"

// const app = new Application();

// app.use(router.routes())

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


//  Sum of two variables

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// const hello = ({ request, response }) => {

//     if (request.url.searchParams.has("number1") === false || request.url.searchParams.has("number2") === false) {

//         response.body = "Invalid parameters"
//     }

//     else {

//         const number1 = request.url.searchParams.get("number1")
//         const number2 = request.url.searchParams.get("number2")
//         const sumOfParams = Number(number1) + Number(number2)

//         response.body = sumOfParams
//     }

// };

// router.get("/", hello);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

// Sum of path variables

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// const hello = ({params, response }) => {

//     const first = Number(params.first)
//     const second = Number(params.second)
//     const sum = first + second

//   response.body = sum;
// };

// router.get("/sum/:first/:second", hello);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

// Showing key from a path

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// const hello = ({ params ,response }) => {

//   response.body = params.something;
// };

// router.get("/key/:something", hello);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

// correcting mistakes

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// const app = new Application();
// const router = new Router();

// const message = ({ response }) => {
//   response.body = "Postman Pat!";
// };

// router.post("/", message);

// app.use(errorMiddleware);
// app.use(router.routes())

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

// GET, POST, PUT

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { errorMiddleware } from "./middlewares/errorMiddleWare.js";

// const app = new Application();
// const router = new Router();

// const getReq = ({response}) => {

//     response.body = "GET request"
// }

// const postReq = ({response}) => {
//     response.body = "POST request"
// }

// const putReq = ({response}) => {
//     response.body = "PUT request"
// }

// router.get("/", getReq)
// router.post("/", postReq)
// router.put("/", putReq)

// app.use(errorMiddleware);
// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


//  two routes

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// const app = new Application();
// const router = new Router();

// const hello = ({ response }) => {
//   response.body = "Hello world!";
// };

// const works = ({response}) => {
//     response.body = "Yes, it works!"
// }

// router.get("/", hello);
// router.get("/test", works)

// app.use(errorMiddleware);
// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

//  first route

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// const app = new Application();
// const router = new Router()

// const greet = ({ response }) => {
//   response.body = "Hello world!";
// };

// router.get("/", greet)

// app.use(errorMiddleware);
// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;



// course harjoitus 1

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router();

// const greet = ({response}) => {
//   response.body = 'Hello world!';
// };

// router.get('/hello', greet);

// app.use(router.routes());

// app.listen({ port: 7777 })
