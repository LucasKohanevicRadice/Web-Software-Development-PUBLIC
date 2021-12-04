// Objects

/* Objects are similar to keys, however, while maps allow practically any type of keys, objects use strings for keys. The way how data is accessed also differs,
    between objects and maps.
    
    The following example defines an object called person that has two keys: name and yearOfBirth.*/

    // const person = {
    //     name: "Lucas Kohanevic Radice",
    //     yearOfBirth: 1997,
    // }

    /* As shown above, an object definition starts with an opening curly bracket and ends with a closing curly bracket. Each key and value is separated by a colon.
        and each pair is separated by a comma. An objects key-value pairs are often referred to as properties or methods when the value is a function.
        
        Accessing the value of a property can be done in two ways:*/

        // console.log(person.name)
        // console.log(person["name"])

    /* While the former way is the prefferred way, the latter is required when the property name comes from a variable or the name contains problematic characters
        that have special meaning in javascript, for instance a space or a dash. */

        // const person = {
        //     name: "Lucas Kohanevic",
        //     "year-of-birth": 1997
        // }

        // const personNameKey = "name"
        // console.log(person[personNameKey])
        // console.log(person["year-of-birth"])

    

        // Adding a property


        /* Adding properties to an object can be done using an assignment operator and an accessor. In the following example, after creating the person-object,
            we add a property inventorOf to the person. */

        
            // const person = {
            //     name: "Lucas Kohanevic",
            //     yearOfBirth: 1997,
            // }

            // person.inventorof = "Mocha"

            // console.log(person.name)
            // console.log(person.inventorof)¨
        

            /* The properties of an object can be retrieved using the function Object.entries. Iterating over the properties can be done with a for ... of loop,
                as follows:  */

            // const person = {
            //     name: "Lucas Kohanevic Radice",
            //     birth: 1997,
            // }

            // for (const [key, value] of Object.entries(person)) {
            //     console.log(`${key}: ${value}`)
            // }


            /* JSON and objects
                JSON (JavaScript Object Notation) is a format that is used for passing JavaScript Objects in a textual format.
                
                The following example is an example of data in a JSON document: */

                // "name": "Lucas"
                // "birth": 1997

            /* The only difference is that in JSON documents all of the key values are within quotation marks.  */


            /* When using Js. a JSON document (which is a string) is translated into a JSON object using the function 

                     JSON.parse(document).

            Similarly, an object can be translated into a string using the function 
            
                    JSON.stringify(object). */
            
            
            const jsonString = '{"name": "Jane Doe", "birth": 1992}'

            const obj = JSON.parse(jsonString)

            console.log(obj.name)

            const string = JSON.stringify(obj)
            console.log(string)
