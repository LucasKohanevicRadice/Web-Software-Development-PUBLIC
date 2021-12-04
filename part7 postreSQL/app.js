

// import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";

// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })




// restructuring and deleting

// import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
// import * as nameService from "./services/nameService.js";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const responseDetails = {
//   headers: { "Content-Type": "text/html;charset=UTF-8" },
// };

// const redirectTo = (path) => {
//   return new Response("-", {
//     status: 303,
//     headers: {
//       "Location": path,
//     },
//   });
// };

// const addName = async (request) => {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   await nameService.create(name);
// };

// const handleRequest = async (request) => {

//     const url = new URL(request.url);
//     console.log(url.pathname)

//   if (request.method === "GET" && url.pathname === "/names") {
//     const data = {
//       names: await nameService.findAll(),
      
//     };
//     return new Response(await renderFile("index.eta", data), responseDetails);
//   } else {
//     // assuming that the method is POST
//     await addName(request);

//     return redirectTo(url.pathname);
//   }
// };

// listenAndServe(":7777", handleRequest);

// deno run --allow-net --allow-read --unstable --watch app.js


// Average measurement

// import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
// import * as measurementService from "./services/measurementService.js";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const responseDetails = {
//   headers: { "Content-Type": "text/html;charset=UTF-8" },
// };

// const handleRequest = async (request) => {

//     const data = {
//         content: "",
//     }

//     const average = await measurementService.measurementsAverage()

//     if (measurementService.measurementCount < 2) {
//         data.content = "Not enough measurements for calculating the average."
//     }

//     else {
//         data.content = `Measurement average: ${average}`
//     }

//     return new Response(await renderFile("index.eta", data), responseDetails)

//     }


// listenAndServe(":7777", handleRequest);



//  Address service

// import * as addressService from "./services/addressService.js"
// console.log(await addressService.findByName("Lucs"))
// console.log(await addressService.findByAddress("possupiht"))
// console.log(await addressService.findByNameAndAddress("Lucas", "possupiat"))



//  Searching for a name (case insensitive)

// const findByNameLike = async (name) => {

//     const findee = `%${name}%`

//     await client.connect()

//     const result = await client.queryObject(
//         "SELECT * FROM names WHERE name ILIKE $1", findee,
//         )
    
//     await client.end()

//     return result.rows
    
// };

// console.log(await findByNameLike("mickeY"))

// Search by name

// const findByName = async (name) => {

//     const findee = name

//     await client.connect()
//     const result = await client.queryObject(
//         "SELECT * FROM names WHERE name = $1 ", findee,
//     )
//     await client.end()

//     return result.rows
// }

// console.log(await findByName("Donald"))

// console.log(findByName("Donald"))




// await client.connect()
// const result = await client.queryObject("SELECT name from names")
// await client.end()
// await console.log(result.rows)


// const findByNameOrAddressLike = async (nameOrAddress) => {
//     const likePart = `%${nameOrAddress}%`;
  
//     await client.connect();
//     const result = await client.queryObject(
//       "SELECT * FROM names WHERE name ILIKE $1;",
//       likePart,
//     );
//     await client.end();
  
//     return result.rows;
//   };

//   console.log(findByNameOrAddressLike("Donald"))




// Adding names    

// import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";

// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })


// const addName = async (name) => {

//     const namee = name

//     await client.connect()
//     await client.queryArray("INSERT INTO NAMES (name) VALUES ($1)", namee)
//     await client.end()

// };

// await client.connect()
// const result = await client.queryObject("SELECT name from names")
// await client.end()
// await console.log(result.rows)

// addName("gege")



// Adding names to a database

// import {Client} from "https://deno.land/x/postgres@v0.12.0/mod.ts"

// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })

// const addName = async () => {

//     await client.connect()
//     await client.queryObject("INSERT INTO names (name) VALUES ('Alan Alexander Milne') ")
//     await client.end()
    
// }

// +
// addName()

// await client.connect()
// const result = await client.queryObject("SELECT name FROM names")
// await client.end()

// console.log(result.rows)



// await client.connect()
// const result1 = await client.queryObject("SELECT name from names")
// await client.end()
// console.log(result1.rows)

// export default addName;



//  Names from the database

// import {Client} from "https://deno.land/x/postgres@v0.12.0/mod.ts"


// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })

// const getNames = async () => {

//     await client.connect()
//     const result = await client.queryObject("SELECT name FROM names")
//     await client.end()

//     return result.rows
// }

// console.log(getNames())

// await client.connect()
// const result = await client.queryObject("SELECT name FROM names")
// await client.end()

// console.log(result.rows)




// test

// import {Client} from "https://deno.land/x/postgres@v0.12.0/mod.ts"

// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })

// await client.connect()
// const result = await client.queryObject("SELECT name FROM names")
// await client.end()

// console.log(result.rows)
