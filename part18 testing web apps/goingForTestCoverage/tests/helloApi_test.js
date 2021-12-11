import { superoak } from "https://deno.land/x/superoak@4.4.0/mod.ts"
import { app } from "../app.js"

console.log()

const message = "jorgos"
const shortMsg = "a"
const longMsg = "JorgosWantsMilkies"

Deno.test("POST to /api/hello sets message", async () => {
    const testclient = await superoak(app)
    await testclient.post("/api/hello")
    .send({"message": `${message}`})
    .expect(200)
})

Deno.test("GET TO /api/hello ", async () => {
    const testclient = await superoak(app)
    await testclient.get("/api/hello")
    .expect({message: `${message}`})
    
})

export {
    message,
    longMsg,
    shortMsg
}

// Issues with this assignment:

//  No mention of --allow-read for tests to work.
//  No mention on how to test response statuses.
//  No mention of having to use const app = Application() as the parameter for the superoak testing function

