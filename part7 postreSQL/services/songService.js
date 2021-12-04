import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";

const client = new Client({
    hostname: "hattie.db.elephantsql.com",
    database: "rtspbeet",
    user: "rtspbeet",
    password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
    port: 5432
})

const create = async (name, rating) => {

    await client.connect()
    await client.queryObject("INSERT INTO songs(name, rating) VALUES ($1,$2);",
    name,
    rating,)
    await client.end()
}

const deleteById = async (id) => {

    await client.connect()
    await client.queryObject("DELETE FROM songs WHERE id = $1",id)
    await client.end()
}

const findAll = async () => {
    await client.connect()
    const result = await client.queryObject("SELECT * FROM songs")
    await client.end()

    return result.rows
}

export {findAll, deleteById, create}



