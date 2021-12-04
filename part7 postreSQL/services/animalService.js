// Functionality after switching the client side database functionality to database.js

import { executeQuery } from "../database/database.js"

const create = async (name) => {
    await executeQuery(
    "INSERT INTO animals (name) VALUES ($1);",
    name,
  );
};

const deleteById = async (id) => {

        await executeQuery(
          "DELETE FROM animals WHERE id = $1;",
          id,
      );

  }

const findAll = async () => {

  const result = await executeQuery("SELECT * FROM animals;");

  return result.rows;
};

export { create, deleteById, findAll }



// Functionality before switching functionality to database.js


// import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";

// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })

// const create = async (name) => {
//   await client.connect();
//   await client.queryObject(
//     "INSERT INTO animals (name) VALUES ($1);",
//     name,
//   );
//   await client.end();
// };

// const deleteById = async (id) => {
//     try {
//       await client.connect();
//       await client.queryObject(
//           "DELETE FROM animals WHERE id = $1;",
//           id,
//       );
//     } catch (e) {
//       console.log(e);
//     } finally {
//       try {
//         await client.end();
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }

// const findAll = async () => {
//   await client.connect();
//   const result = await client.queryObject("SELECT * FROM animals;");
//   await client.end();

//   return result.rows;
// };

// export { create, deleteById, findAll };