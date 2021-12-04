// Address service

// import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";
import { executeQuery } from "../database/database.js"

// const client = new Client({
//     hostname: "hattie.db.elephantsql.com",
//     database: "rtspbeet",
//     user: "rtspbeet",
//     password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
//     port: 5432
// })

const create = async (name, address) => {

  await executeQuery(
    "INSERT INTO addresses (name, address) VALUES ($1, $2);",
    name,
    address,
  );

};

const findAll = async () => {
  let result = await executeQuery("SELECT * FROM addresses;");
  return result.rows;
};

const findByNameOrAddressLike = async (nameOrAddress) => {
  const likePart = `%${nameOrAddress}%`;

  const result = await executeQuery(
    "SELECT * FROM addresses WHERE name ILIKE $1 OR address ILIKE $2;",
    likePart,
    likePart,
  );


  return result.rows;
};

const findByName = async (name) => {

    const findee = `${name}`

    const result = await executeQuery("SELECT * FROM addresses WHERE name = $1", findee)

    // const result = await client.queryObject("SELECT address FROM addresses WHERE name = $1", findee)


    return result.rows
};

const findByAddress = async (address) => {

    const findee = `${address}`


    const result = await executeQuery("SELECT * FROM addresses WHERE address = $1 ", findee)


    return result.rows
};

const findByNameAndAddress = async (name, address) => {

    const findeeName = `${name}`
    const findeeAddress = `${address}` 

    const result = await executeQuery("SELECT * FROM addresses WHERE name = $1 AND address = $2",
    findeeName,
    findeeAddress,
    )


    return result.rows
};

export {
  create,
  findAll,
  findByAddress,
  findByName,
  findByNameAndAddress,
  findByNameOrAddressLike,
};
