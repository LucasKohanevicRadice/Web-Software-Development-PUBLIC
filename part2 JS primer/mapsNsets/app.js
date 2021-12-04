/* Maps and sets are commonly used data structures for storing and retrieving data. Maps contain key value pairs e.g dictionaries in python.
    Sets contain value that can only occur once in a set. */

    //  Maps

    /*  Maps are created with the -new- keyoword that creates a new mapm which is accessed with a set of methods. 
        The relevant methods for maps are as follows:
        
        -   set(key,value), Set keys-value pair to the map, if the key already exists in the map, the old value is replaced with the new one.
        -   get(key) retrieves a value for a given key, return either the value or -undefined- if the value does not exist.
        -   has(key) checks if a key exists; returns either true or false
        -   delete(key) - removes a key-value pair from the map based on a given key.*/
    
    // The following example demonstrates the basic map functionality:

    // const translations = new Map()

    // translations.set("yksi", "one")
    // translations.set(2, "two")
    // translations.set("tres", "three")

    // console.log(translations.has("neljä"))

    // translations.set("neljä", "four")

    // console.log(translations.has("neljä"))

    // translations.delete("yksi")

    // console.log(translations)

    // console.log(translations.get(2))
    // console.log(translations.get(3))



    // Sets

    /* Sets are created with the -new- keyword that creates a nwe set, which similar to the map, is accessed with a set of methods.
        The relevant methods are as follows:
        
        -   add(value) - adds a value to the set
        -   has(value)  - checks if a value exists; returns either true or false
        -   delete(value) - deletes a value from the set.
        
        The following example demonstrates the basic set funtcionality:
        */

    // const uniques = new Set()
    // uniques.add("one")
    // uniques.add("two")
    // uniques.add("two")
    // uniques.add("two")

    // console.log(uniques)

    // uniques.delete("two")

    // console.log(uniques)
    // console.log(uniques.has("two"))


    // Iteration

    /* Values in a map can be iterated like a dictionary in python. Kind of like iterating over an array with two elements. Iterating over a set on the other hand,
        works just like iterating over an array.
        The examples below demonstrate these iterating functionalities: */


    const countryNames = new Map()
    countryNames.set("FIN", "Finland")
    countryNames.set("SWE", "Sweden")

    for (const [key, value] of countryNames) {
        console.log(`${key} ${value}`)
    }

    console.log("---")

    const countries = new Set()
    countries.add("Finland")
    countries.add("Sweden")
    countries.forEach((value) => {
        console.log(value)
    })