// Adding to a list

// no code so far!
const addToList = () => {
    let fieldValue = document.querySelector("#text").value
    const element = document.createElement("li")
    const text = document.createTextNode(fieldValue)
    element.appendChild(text)
    document.querySelector("#list").appendChild(element)
    document.querySelector("#text").value = ""
};



// Adding and removing one

// const plusOne = () => {
//     let count = document.querySelector("#count").innerHTML 
//     count ++
//     document.querySelector("#count").innerHTML = count
// }

// const minusOne = () => {
//     let count = document.querySelector("#count").innerHTML
//     count --
//     document.querySelector("#count").innerHTML = count
// }



//      Fixing a counter 

// let count = document.querySelector("#count").innerHTML;

// const incrementCount = () => {
//     let count = document.querySelector("#count").innerHTML;
//     count ++
//     document.querySelector("#count").innerHTML = count;
//   };
  



// Content from a javaScript file

// document.querySelector("#title").innerHTML = "F";
// const strings = ["hello", "world", "this", "is", "nice"];


// strings.forEach((s) => {
//     const element = document.createElement("li")
//     const text = document.createTextNode(s)
//     element.appendChild(text)
//     document.querySelector("#list").appendChild(element)
//   console.log(s);
// });


//      Adding a paragraph to a container  

// const element = document.createElement("p")
// const text = document.createTextNode("I was just added into a container!")
// element.appendChild(text)

// document.querySelector("#title").innerHTML = "Hello World!";
// document.querySelector("#container").appendChild(element) 

// Adding a paragraph to a body
// const element = document.createElement("p")
// const text = document.createTextNode("I was just added!")
// element.appendChild(text)

// document.querySelector("#title").innerHTML = "Hello World!";
// document.querySelector("body").appendChild(element)


//      Switching Contents

// const title = document.querySelector("#title").innerHTML
// const paragraph = document.querySelector("#text").innerHTML


// // console.log(document.querySelector("#title").innerHTML)
// // console.log(document.querySelector("#text").innerHTML)

// document.querySelector("#title").innerHTML = paragraph;
// document.querySelector("#text").innerHTML = title 



//          Hello JavaScript 

// document.querySelector("#title").innerHTML = "Hello JavaScript!";
