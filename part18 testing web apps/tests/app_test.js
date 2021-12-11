// JSON echo

import { superoak } from "https://deno.land/x/superoak@4.4.0/mod.ts";

import { app } from "../app.js";

Deno.test("POST TO /names", async () => {
    const testclient = await superoak(app)
    await testclient.post("/name")
    // .set("JSON", {"name":"Lucas"})
    .send({"name":"Lucas"})
    .expect("Lucas")
})

Deno.test("POST to root path", async () => {
    const testclient = await superoak(app)
    await testclient.post("/")
    .send({"name": "Lucas"})
    .expect({"name": "Lucas"})
})

Deno.test("POST to root path", async () => {
    const testclient = await superoak(app)
    await testclient.post("/")
    .send({"age": 24})
    .expect({"age": 24})
})

Deno.test("POST TO /names", async () => {
    const testclient = await superoak(app)
    await testclient.post("/name")

    .send({"name":"Lucas"})
    .expect("Pertti")
})

Deno.test("POST to root path", async () => {
    const testclient = await superoak(app)
    await testclient.post("/")
    .send({"age": 24})
    .expect(24)
})





// implement tests here

// echo

// import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

// import { echo } from "../app.js";

// // implement tests heredeno test --allow-net app_test.js

// Deno.test("Function echo returns 'echoechoecho!'", () => {
//     assertEquals(echo(), "echoechoecho!")
// } )

// Deno.test("Function echo returns 'echoechoecho!'", () => {
//     const kaiku = "echoechoecho!"
//     assertEquals(echo(), kaiku)
// } )

// Deno.test("Function echo returns 'echoechoecho!' ", () => {
//     assertEquals(echo(), "asdasd")
// })