import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { getHello } from "../../services/helloService.js";
import { setHello } from "../../services/helloService.js"
import { message } from "../helloApi_test.js"
import { shortMsg } from "../helloApi_test.js"
import { longMsg } from "../helloApi_test.js"

console.log()
console.log("NEW TEST")
console.log()

Deno.test(`Calling setHello()`, async () => {
  assertEquals(setHello(), )
})

// Deno.test(`Calling setHello(${shortMsg}) sets message as 'Oh, hello there!'`, async () => {
//   assertEquals(setHello(shortMsg), `Oh, hello there!`)
// })

// Deno.test(`Calling setHello(${longMsg}) sets message as 'Oh, hello there!'`, async () => {
//   assertEquals(setHello(longMsg), `Oh, hello there!`)
// })

Deno.test(`Calling setHello(${message})`, async () => {
  assertEquals(setHello(message),)
})

Deno.test(`Calling 'getHello()' returns '${message}'`, async () => {
  assertEquals(getHello(), `${message}`);
});
 