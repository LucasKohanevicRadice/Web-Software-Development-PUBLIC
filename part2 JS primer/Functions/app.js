//  Defining and using functions

/*
    Starting from JS version ES6, functions can be defined using a concise arrow syntax () => {}
    When creating a function, we define a constant variable which stores a reference to the created function that can be called out later.
    Thus, the name of the variable that stores the otherwise anonymous function becomes the name of the function. The following example defines a function
    called hello that, when called logs the message Hello World!. In the example, the function is called after it is defined.

*/


// const hello = () => {
//     console.log("JookosKookos");
// }

// hello();



//  Function parameters

/*
    If a function has parameters, parameter values are added to the brackets. In the following example, we define a function greet that takes in a name as a parameter.

*/


// const greet = (name) => {
//     console.log(`Hello ${name}!`)
// }

// greet("Lucas Kohanevic")

// The code on top prints out "Hello Lucas Kohanevic!"

//  If the parameter value is undefined like:
// greet()
// The parameter value will be set to "undefined"


/*      Multiple parameters are separated from each other using commas. In addition default parameter values can be set in the parameter definition.
        The following example creates another version of the greet() function, which has two parameters with default values. Calling the function,
        without setting parameters produces output "hello John Doe!", while the parameter can also be set as shown in the below example */



// const greet = (greeting = "hello,", name = "John doe") => {
//     console.log(`${greeting} ${name}`)
// }

// greet()
// greet("oh hi")
// greet("oh hi", "Lucas")

//  As you can see, it is also possible to change the parameter values when calling the function, even though the parameter values would have already been set.



//  Returnin a value from a function


/* 
    The following example shows a function that returns a greeting.    
*/


const greeting = (who = "John doe") => {
    return `Hello ${who}!`
}

const output = greeting("you")
console.log(greeting())


