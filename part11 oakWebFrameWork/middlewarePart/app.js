//  Serving static files

import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { serveStaticFiles } from "./middlewares/serveStaticMiddleware.js"

const app = new Application();

const hello = ({ response }) => {
  response.body = "Hello world!";
};

app.use(serveStaticFiles)
app.use(hello);

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app;



//  Timing responses

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { time } from "./middlewares/timerMiddleware.js"


// const app = new Application();

// const hello = ({ response }) => {

//   response.body = "Hello world!"

// //   console.log(response.body) 
// };

// app.use(time)
// app.use(hello)


// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// Hello middleware

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { log } from "./middlewares/loggingMiddleware.js"

// const app = new Application();

// const hello = ({ response }) => {
//   response.body = "Hello world!";
// };

// app.use(log)
// app.use(hello);



// if (!Deno.env.get('TEST_ENVIRONMENT')) {
//     app.listen({ port: 7777 });
//   }
  
//   export default app;