// Learning what synchronous and asynchronous functions are and how they work and how to create them.

/*  The difference between synchronous and asynchronous functions is that when a synchronous function is called from program code, 
    the execution of the code from where the function is called waits until the synchronous function has finished execution. 
    For asynchronous functions, the execution of code from where the asynchronous function is called does not need to wait and can continue execution.
    
    JavaScript has both kind of functions.
    
    Asynchronous functions are called using the async keyword that is placed before the parameters in the function definition.
    
    The following is an example of an asynchronous function that waits for the amount of seconds given as a parameter and then logs it into the console.*/


    // const waitAndPrint = async(message, seconds) => {
    //     await new Promise(resolve => setTimeout(resolve, seconds*1000))
    //     console.log(message)
    // }

    // waitAndPrint("first", 3) // takes approximately 3 seconds to appear
    // waitAndPrint("second", 2)   // takes approximately 2 seconds to appear
    // waitAndPrint("third", 1)    // takes approximately 1 seconds to appear

    /*output is:

    third
    second
    first 
    
    */

    // Now if we want for our program to wait for the asynchronous function to finish the exection, we would use the -await- keyword when calling the function:
    // In the following example we wait for the first waitAndPrint function to finish before proceeding with the other ones.

    // await waitAndPrint("first", 3) // takes 3 seconds to print, the other functions wait for this function to finish.
    // waitAndPrint("second", 2)  //initiates, takes 2 seconds to print
    // waitAndPrint("third", 1)   // initiates, takes 1 second to print

    /* 
    Output:
    first
    third
    second 
    */

    /*Below is an example where the program prints the messages every second: */

    // const waitAndPrint = async(message, seconds) => {
    //     await new Promise(resolve => setTimeout(resolve, seconds*1000))
    //     console.log(message)
    // }

    // await waitAndPrint("first", 1) 
    // await waitAndPrint("second", 1)   
    // await waitAndPrint("third", 1)    

    /* When await is within a function, we need to define the function in which await is used as asynchronous. The following example shows a program,
        where await is used within a function that is not asynchronous -- the example does not work. */

        // const waitAndPrint = async(message, seconds) => {
        //     await new Promise(resolve => setTimeout(resolve, seconds * 1000));
        //     console.log(message);
        //   }
          
        //   const example = () => {
        //     await waitAndPrint('First call!', 3);
        //     await waitAndPrint('Second call!', 2);
        //     await waitAndPrint('Third call!', 1);
        //   }
          
        //   example();


        /* Changing the function to asynchronous fixes the problem: */


        // const waitAndPrint = async(message,seconds) => {

        //     await new Promise(resolve => setTimeout(resolve, seconds * 1000))
        //     console.log(message)
        // }

        // const example = async() => {
        //     await waitAndPrint("first", 1)
        //     await waitAndPrint("second", 1)
        //     await waitAndPrint("third", 1)
        // }
        // example()

        /* In general however, if asynchronous functions are called without the await keyword, i.e the program execution does not wait for the function to finish,
            It is unclear in which order they will be completed. For example, one cannot explicitly determine in which order the following code prints 
            the outputs. */

        
            // const print = async(message) => {
            //     console.log(message)
            // }

            // print("helloooou")
            // print("MOIKKELIIIS")

            // Well in this case it seems to always call the functions in order... Might be because of vscode and extensions..
            // Or perhaps if the second function would be a lot bigger and would require more time execute.. Maybe then the order in which the functions 
            // are finished would be different. Lets try it.

            // const print = async(message) => {
            //     console.log(message)
            // }

            // let moikkelista = "MOIKKELIIS"
            // print(moikkelista.repeat(100000)) // Seems that even the power of 100000 moikkelis' does not get left behind a hellouuuu.
            // print("helloooou")






