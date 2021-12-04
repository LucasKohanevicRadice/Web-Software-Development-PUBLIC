//  Simple paywall
//  testing save all, yet again

import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v3.1.3/mod.ts";

const app = new Application();
const session = new Session();
app.use(session.initMiddleware());

const hello = async ( context ) => {

    let count = await context.state.session.get("count")

    if (!count) {
        count = 1

        await context.state.session.set("count", Number(count))
        
        console.log(`cookie variable ${await context.state.session.get("count")}`)
        context.response.body = ("Welcome! Here are the truths that you are seeking for!")
    }
    

    else if (await context.state.session.get("count") > 0 && await context.state.session.get("count") < 3) {
        

        await context.state.session.set("count", Number(count) + 1)
        console.log(`cookie variable ${await context.state.session.get("count")}`)
        context.response.body = ("Welcome! Here are the truths that you are seeking for!")
    }

    else if (await context.state.session.get("count") === 3) {
        
        await context.state.session.set("count", Number(count) + 1)
        console.log(`cookie variable ${await context.state.session.get("count")}`)
        context.response.body = ("No more free truths. Payment required.")

    }

    else if (await context.state.session.get("count") === 4) {

        console.log(`cookie variable ${await context.state.session.get("count", Number(count))}`)
        context.response.body = ("No more free truths. Payment required.")

    }


};

app.use(hello);

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app
//  Welcome stranger !

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { Session } from "https://deno.land/x/oak_sessions@v3.1.3/mod.ts";

// const app = new Application();
// const session = new Session();
// app.use(session.initMiddleware());

// const hello = async (context) => {

//     let count = await context.state.session.get("count")

//     if (!count) {
//         count = 1
//         await context.state.session.set("count", count)
//         context.response.body = ("Welcome stranger!")
        
//     }

//     else {
//         context.response.body = ("Hi again!")
//     }

// };

// app.use(hello);

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// counting requests

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import { Session } from "https://deno.land/x/oak_sessions@v3.1.3/mod.ts";

// const app = new Application();
// const session = new Session()
// app.use(session.initMiddleware())

// const hello = async ( context ) => {

//     let count = await context.state.session.get("count")

//     if (!count) {
//         count = 1
//     }

//     await context.state.session.set("count", Number(count) + 1)

//     context.response.body = `${count}`;
// };

// app.use(hello);

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// export default app;

//  Showing cookie data in response

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();

// const hello = async ({ cookies, response }) => {

//     // const valuee = await cookies.set("secret", "boobala")
//     // valuee // this works. This sets the key-value pair of "secret"-"boobala" into the cookies

//     if (await cookies.get("secret") === undefined) {

//         response.body = "The secret is undefined"
//     }

//     else {
//         const value = await cookies.get("secret")

//         response.body = `The secret is ${value}`
//     }
// };

// app.use(hello);

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;

// Setting a cookie based on path

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();
// const router = new Router()

// const hello = async ({ cookies ,response, request}) => {


//     const path = request.url.pathname

//     if (path.includes("admin") === true) {

//         await cookies.set("admin","true")
//         response.body = "Hello world!"
//     }

//     else {
//         await cookies.set("admin", "false")
//         response.body = "Hello world!"
//     }

// };

// app.use(hello);

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


// Setting a cookie

// import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

// const app = new Application();

// const hello = async ({ cookies, response }) => {

//     await cookies.set("hello", "world")

//   response.body = "Hello world!";
// };

// app.use(hello);

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;