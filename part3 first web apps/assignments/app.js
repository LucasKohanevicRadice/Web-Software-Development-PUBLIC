



//                                                  Calculator

// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"


// const server = serve({ port: 7777 });

// const requestParams = (url) => {
//   let queryParams = "";
//   if (url.includes("?")) {
//     queryParams = url.slice(url.indexOf("?"));
//   }

//   return new URLSearchParams(queryParams);
// };

// for await (const request of server) {

//   let params = requestParams(request.url)

//   let operation = params.get("operation")
//   let number1 = params.get("number1")
//   let number2 = params.get("number2")

//   let output = ""

//   let allowedOps = ["product", "sum", "difference", "quotient"]


//   if  (allowedOps.indexOf(`${operation}`) === -1) {

//     request.respond({body: "Invalid parameters" })
//   }

//   else if (number1 === null || number2 === null) {
//     request.respond({body: "Invalid parameters."})
//   }


//   else if(operation === "sum") {

//     let sum = Number(number1) + Number(number2)

//     request.respond({body: `${sum}`})
//   }

//   else if(operation === "product") {

//     let product = Number(number1) * Number(number2)
    
//     request.respond({body: `${product}`})

//   }

//   else if (operation === "difference") {

//     let diff = (  Number(number1 - Number(number2))  )

//     request.respond({body: `${diff}`})

//   }

//   else if (operation === "quotient") {

//     let divi = Number(number1)/Number(number2)
//     request.respond({body: `${divi}`})

//   }


// }








//  Parameters page and count, if present


// import {  serve } from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({port : 7777})

// const requestParams = (url) => {

//   let queryParams = ""

//   if (url.includes("?")) {
//     queryParams = url.slice(url.indexOf("?"))
//   }

//   return new URLSearchParams(queryParams)

// }

// for await(const request of server) {

//   const params = requestParams(request.url)

//   let page = params.get("page")
//   let count = params.get("count")

//   if (page === null && count === null) {
//     request.respond({body: "-"})
//   }

//   else if (page === null && count !== null ) {
//     request.respond({body: `count: ${count}`})
//   }

//   else if (page !== null && count === null) {
//     request.respond({body: `page: ${page}`})
//   }

//   else {
//     request.respond({body: `page: ${page}, count: ${count}` })
//   }


// }



//                                                                    Starting story

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({ port: 7777 })

// const requestParams = (url) => {
//   let queryParams= ""

//   if (url.includes("?")) {
//     queryParams = url.slice(url.indexOf("?"))
//   }

//   return new URLSearchParams(queryParams)
// }


// for await (const request of server) {

//   const params = requestParams(request.url)

//   let title = params.get("title")
//   let name = params.get("name")

//   if (title === null) {
//     title = "princess"
//   }

//   if (name === null) {
//     name = "Tove"
//   }

//   request.respond({body: `Once upon a time, there was a ${title} called ${name}.`})
// }








//                                                              Parameters and page output



// import { serve  } from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({ port : 7777})

// const requestParams = (url) => {

//     let queryParams = ""
//     if (url.includes("?")) {
//       queryParams = url.slice(url.indexOf("?"))
//     }

//     return new URLSearchParams(queryParams)
// }


// for await (const request of server) {
//   const params = requestParams(request.url)

//   request.respond({ body: `${params.get("page")} ${params.get("count")}`})
// }






//                                                                  countdown

// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({ port: 7777 })

// let count = 5


// for await (const request of server) {

//   if (request.url === "/count" && count > 0) {

//     request.respond({body: `${count}`})
//     count -= 1
//   }

//   else if (request.url === "/count" && count < 1) {
//     request.respond({ body: "Kaboom!"})
//   }

// }







//                                                                  peeking at a secret


// import {serve} from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({ port: 7777})
// for await (const request of server) {

//   if (request.method === "PEEK" && request.url === "/secret") {
//     request.respond({ body: "Peeking at secret data..."})
//   }

//   else {
//     request.respond({ body: "There is nothing to see here..."})
//   }
  
// }


 
 
 
 
//                                                      Responding with the path and the request method



// import {  serve   } from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({ port: 7777})

// for await (const request of server) {

//   let method = request.method
//   let path = request.url

//   request.respond({body: `${method} request made to path ${path}`})
// }









//                                                      Responding with the request method


// import {  serve } from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({  port: 7777  })

// for await (const request of server) {

//   let method = request.method

//   request.respond({ body: `You made a request with method ${method}`})
// }







//                                                      retrieveing data, adding data, not allowed


// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

// const server = serve({ port: 7777 });

// for await (const request of server) {

//   if (request.method === "GET") {
//     request.respond({ body: "Retrieving data..."})
//   }

//   else if(request.method === "POST") {
//     request.respond({ body: "Posting data..."})
//   }

//   else {
//     request.respond({ body: "Unable to comply..."})
//   }
// }





//                                                        Secret recipe

// import {  serve } from "https://deno.land/std@0.106.0/http/server.ts"

// const server = serve({ port: 7777 })

// for await (const request of server) {

//   if (request.url.includes("secret")) {

//       request.respond({ body: "The recipe is: ..."})
//     }
  
//   else {
//       request.respond({ body: "Nothing to see here."})
//   }

// }





//                                                        Yksi kaksi pong


// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

// const server = serve({ port: 7777 });

// for await (const request of server) {

//   if (request.url === "/one") {
//     request.respond({ body: "yksi" })
//   }

//   else if(request.url ==="/two") {
//     request.respond({body: "kaksi"})
//   }

//   else {
//     request.respond({body: "pong"})
//   }
  
// }








//                                                      Responding with the path

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

// const server = serve({ port: 7777 });

// for await (const request of server) {

//   const path = request.url

//   request.respond({ body: `You requested the path ${path}\n` }); // ilmeisesti \n oli liikaa...
// }




// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

// let server = serve({ port: 7777 });

// for await (let request of server) {
//   request.respond({ body: "Hi all!\n" });
// }