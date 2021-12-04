

// Variables 


// let name = "B.Eich"
// let yearOfBirth = 1961

// name = "Brendan Eich"

// console.log(name + " was born in " + yearOfBirth + ".")


// Block scoping

// Both let an const are used to define block-scoped variables. Broadly speaking, a block refers to an area that has been defined using curly brackets.
// e.g {this text is in within a block}


// {
//     const name = "b.Ericlh"
//     console.log(name)
// }

// console.log(name)

// As the variable is block-scoped, the variable only works within the block. When we try to use the name variable outside the block, we get an error
// The variable has not yet been assigned (outside the block)



// Although, It is possible to first assign a variable outside a block, and then change the same variable inside a block like this:

// let name = "B. Eich";
// {
//     name = "Brendan Eich";
// }
// console.log("Value of the variable name is " + name);

// This prints out 'Value of the variable name is Brendan Eich'

// Although, this only works with let variables, const variables are constants and cannot be changed in or out of a block.



// Template literals

//  With template literals it is possible to add variables directly into a string e.g:

// const name = "Lucas Kohnaasd"
// const year = "1923"

// console.log(`${name} was born in ${year}`)

// Template literals use `backticks` <- instead of quotation marks "" or single dotted quotation marks '', like in regular strings





