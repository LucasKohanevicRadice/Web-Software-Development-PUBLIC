/* The most common used data structures for storing data are arrays, maps and sets.

The following example defines an array with two values.*/

// const array = ["one", "two"]

// console.log(array)
// console.log(array[0])
// console.log(array[1])

// Works exactly the some as e.q in python, so far atleast.


//  Adding and removing content

/* Adding values to an array is done using the push-method, which adds the value to the end of the array. 
    Values can be removed using the shift and pop method. Shift removes the first value and pop removes the last value.
    To remove values in the middle of an array, js offers the splice-method that removes one or more values between provided indices.*/
    
    

    // const array = []

    // array.push(1)
    // array.push(2)
    // array.push(3)

    // console.log(array)

    // const shifted = array.shift() // In here the original first value of the array hasn't only been removed, it has been saved to another variable.

    // console.log(shifted)
    // console.log(array)

    // array.shift()

    // console.log(array)

    // array.pop()

    // console.log(array)


    // Splice removes values in a range of the array: like this:

    // let array = [1,2,3,4,5]

    // console.log(array) // Prints [ 1, 2, 3, 4, 5 ]

    // array.splice(0,2)

    // console.log(array) // prints [ 3, 4, 5 ]


    // array = [1,2,3,4,5]

    // array.splice(0,1) // removes only the first value in the array
    
    // console.log(array) // Prints out [ 2, 3, 4, 5 ]


    /*  Iterating over the values of an array can be done in multiple ways. The following examples show two ways using the for loop: */


    // const array = [1,2,3,4,5]
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i])
    // }

    // console.log("---")

    // for (const value of array) {
    //     console.log(value)
    // }


    // Js arrays can also be iterated using a forEach method. The forEach method is given a function that will be executed to all the values in the array.

    // const array = [1,2,3,4,5,6]

    // array.forEach((value)=> {
    //     console.log(value)
    // } )

    // const log = (value) => {
    //     console.log(value)
    // }


    // Accessing an array from a separate file

    



