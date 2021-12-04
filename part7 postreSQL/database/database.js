//  After creating a connection pool

import { Pool } from "https://deno.land/x/postgres@v0.13.0/mod.ts" 

const CONCURRENT_CONNECTIONS = 2

const connectionPool = new Pool({

    // database credentials go here

}, CONCURRENT_CONNECTIONS)

const executeQuery = async (query, ...args) => {

    const response = {}
    
    let client = await connectionPool.connect() 

    try {
        // client = await connectionPool.connect()
        const result = await client.queryObject(query, ...args)
        if (result && result.rows) {
            response.rows = result.rows
        }
    } 

    catch(e) {
        response.error = e
    }   

    finally {
        try {
            await client.release()
        } 
        catch(e) {
            console.log(e)
        }
    }

    return response
}

export { executeQuery }











// Before creating a connection pool


// import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";

// const client = new Client({

// })

// const executeQuery = async (query, ...args) => {

//     const response = {}

//     try {
//         await client.connect()
//         const result = await client.queryObject(query, ...args)
//         if (result && result.rows) {
//             response.rows = result.rows
//         }
//     } 

//     catch(e) {
//         response.error = e
//     }   

//     finally {
//         try {
//             await client.end()
//         } 
//         catch(e) {
//             console.log(e)
//         }
//     }

//     return response
// }

// export { executeQuery }
