
// layouts

import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const server = serve({ port: 7777 });

const data = {};

for await (const request of server) {
  if (request.url === "/about") {
    request.respond({ body: await renderFile("about.eta", data) });
  } else {
    request.respond({ body: await renderFile("index.eta", data) });
  }


// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//   todos: [{
//       task : "Write a TODO app",
//       bool: false, 
//       },
//       {   
//       task: "Show a list of TODOs",
//       bool: true,
//       },
//       {
//         task: "Move TODOs to a database",
//         bool: false,
//       },    
//       {
//         task: "Allow marking TODOs done",
//         bool: false,
//       }],
// };

// for await (const request of server) {
//   request.respond({ body: await renderFile("index.eta", data) });
// }

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//   emperors: [{
//     name: "Augustus",
//     yearOfBirth: -63,
//   }, {
//     name: "Tiberius",
//     yearOfBirth: -42,
//   }, {
//     name: "Caligula",
//     yearOfBirth: 12,
//   }, {
//     name: "Claudius",
//     yearOfBirth: -10,
//   }, {
//     name: "Nero",
//     yearOfBirth: 37,
//   }],
// };

// for await (const request of server) {
//   request.respond({ body: await renderFile("index.eta", data) });
// }



// request methods as a list

// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts"

// configure({
//     views: `${Deno.cwd()}/views/`,
// })

// const server = serve({ port: 7777 })

// const data = {
//     methods : [],
// }

// for await (const request of server) {

//     if (request.url !== "/methods") {

//         request.respond({status: 404})
//     }

//     else {

//         let method = request.method
//         data.methods.push(method)

//         request.respond({body: await renderFile("index.eta", data)})

//     }
// }




// Fixing a loop

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//   vegetables: ["Carrot", "Kale", "Broccoli", "Zombie"],
// };

// for await (const request of server) {
//   request.respond({ body: await renderFile("index.eta", data) });
// }



//  Negative, positive, zero

// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"
// import {configure, renderFile} from "https://deno.land/x/eta@v1.12.3/mod.ts"

// configure({
//     views: `${Deno.cwd()}/views/`
// })

// const server = serve({port: 7777})

// const requestParams = (url) => {

//     let queryParams = ""

//     if (url.includes("?")) {
//         queryParams = url.slice(url.indexOf("?"))
//     }

//     return new URLSearchParams(queryParams)
// }

// const data = {

//     object: "gravity",
//     value: 0,
//     nepoze: "",
// }

// for await (const request of server) {

//     const params = requestParams(request.url)

//     if (params.has("object")) {
//         data.object = params.get("object")
//     }

//     if (params.has("value")) {
//         data.value = Number(params.get("value"))
//     }

//     if (data.value > 0) {
//         data.nepoze = "(positive)"
//     }

//     else if (data.value === 0) {
//         data.nepoze = "(zero)"
//     }

//     else if (data.value < 0) {
//         data.nepoze = "(negative)"
//     }

//     console.log(data.object)
//     console.log(data.value)
//     console.log(data.nepoze)



//     request.respond({ body: await renderFile("index.eta", data)})

// }















// Hello boss! eta template based version

// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"
// import {configure, renderFile} from "https://deno.land/x/eta@v1.12.3/mod.ts"


// configure({
//     views: `${Deno.cwd()}/views/`
// })

// const server = serve({port : 7777})

// const requestParams = (url) => {

//     let queryParams = ""

//     if (url.includes("?")) {
//         queryParams = url.slice(url.indexOf("?"))
//     }

//     return new URLSearchParams(queryParams)
// }

// const data = {
//     name : "John doe"
// }


// for await (const request of server) {

//     console.log(request.url)

//     if (request.url === "/") {
//         request.respond({body: await renderFile("index.eta", data)})
//     }


//     else {
//         const params = requestParams(request.url)

//         data.name = params.get("name")
    
//         request.respond({body: await renderFile("index.eta", data)})
//     }
// }




//  Hello boss!, JS based version.


// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"
// import {configure, renderFile} from "https://deno.land/x/eta@v1.12.3/mod.ts"

// configure({
//     views: `${Deno.cwd()}/views/`
// })

// const server = serve({port : 7777})

// const requestParams = (url) => {

//     let queryParams = ""
//     if (url.includes("?")) {

//         queryParams = url.slice(url.indexOf("?"))
//     }

//     return new URLSearchParams(queryParams)
// }

// const data = {
//     name : "John doe"
// }

// for await (const request of server) {

//     const params = requestParams(request.url)

//     if (params.has("name") && params.get("name") === "ADMIN") {

//         data.name = "boss"
//     }

//     else if (params.has("name") && params.get("name") === null ) {
//         data.name = ""
//     }

//     else {
//         data.name = params.get("name")
//     }


//     request.respond({body : await renderFile("index.eta", data)})
// }





//  Requests to favicon.ico

// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts"

// configure({
//     views: `${Deno.cwd()}/views/`,
// })

// const server = serve({ port : 7777 })

// let visitCount = 0

// for await (const request of server) {

//     if (request.url === "/favicon.ico") {

//         visitCount ++

//         request.respond({ status : 404})
//     }

//     else {
        
//         const data = {
//             count: visitCount
//         }

//         request.respond({body: await renderFile("index.eta", data)})
//     }
// }



// Fixing a counter

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// let visitCount = 0;


// for await (const request of server) {

      
//   if (request.url === "/count") {
//     visitCount++

//     const data = {
//         count: visitCount,
//       };
    
//     request.respond({ body: await renderFile("index.eta", data) })
//   } 
  
//   else {
//     request.respond({ status: 404 });
//   }
// }





//  Multiple variables

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//   title: "Hello View Templates!",
//   content: "This is text!",
// };

// for await (const request of server) {
//   request.respond({ body: await renderFile("index.eta", data) });
// }



//  Starting with templates


// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//   title: "Hello world!",
// };

// for await (const request of server) {
//   request.respond({ body: await renderFile("index.eta", data) });
// }