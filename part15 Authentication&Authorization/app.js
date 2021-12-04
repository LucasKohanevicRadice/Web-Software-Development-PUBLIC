//  Simple authentication with form

import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v3.1.3/mod.ts";
import renderMiddleware from "./middlewares/renderMiddleware.js";

const app = new Application();
const router = new Router();
const session = new Session();
app.use(session.initMiddleware());

app.use(renderMiddleware);

const showMain = async ({ render, state }) => {

    const authenticated = await state.session.get("authenticated")

    if (!authenticated) {
        render("index.eta");
    }

    else {
        render("secret.eta")
    }
    
};
 
const authenticate = async ({response, state, request}) => {
 
    const body = request.body()
    const params = await body.value

    const password = params.get("password")
    

    if (password === "hippopotamus") {
        await state.session.set("authenticated", true)
        response.body = "Authentication successful."
    }

    else {
        response.body = "Wrong password."
        
    }
}

router.get("/", showMain);
router.post("/",authenticate)

app.use(router.routes());

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app;


//  Simple authentication

// import {Application, Router} from "https://deno.land/x/oak@v9.0.1/mod.ts"
// import { Session } from "https://deno.land/x/oak_sessions@v3.1.3/mod.ts"

// const app = new Application()
// const router = new Router()
// const session = new Session()

// app.use(session.initMiddleware())

// const showStatus = async ({ response, state }) => {

//     const authenticated = await state.session.get("authenticated")

//     if(!authenticated) {

//         response.body = "Not authenticated"
//     }

//     else {
//         response.body = "Authenticated"
//     }

    
// }


// const authenticate = async ({ response, state, request }) => {

//     const body = request.body()
//     const params = await body.value

//     const username = params.get("username")
//     const password = params.get("password")

//     if (password === "00000000" && username === "Minuteman") {

//         await state.session.set("authenticated", true)
//         response.redirect("/")

//     }
//     else {
//         response.status = 401
//         response.redirect("/")
//     } 

// }


// router.get("/", showStatus)
// router.post("/", authenticate)

// app.use(router.routes())

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//     app.listen({ port: 7777 });
//   }
  
//   export default app;