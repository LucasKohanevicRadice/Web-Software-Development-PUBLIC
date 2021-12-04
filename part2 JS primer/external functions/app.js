// External functions

/*

> Learn how to import code from online locations
> know how to determine where the code downloaded to the local computer is placed
> know some addresses from where you can search for libraries and functions

*/

// Importing external functions

/* Importing exteranl functions works similarly to importin functions from local files. 
    Instead of using the file location from where the function is imported from, we use the address of the files that has the functions that we wish to import.
    
    i.e:*/

// import { hello } from "https://raw.githubusercontent.com/FITech101/simplejs/main/fun-code.js"

// hello()          // prints out "Hello external function!"


/*  When we run the app.js for the first time, the code that needs to be imported is downloaded to the local computer and then executed. 
    On subsequent runs, there is no longer a need to download the code, as it has already been downloaded.
    
    If the code in the online location changes but the address but the address stays the same, our application does not know about it.
    In such a case, we need to clear the code that has been downloaded to our computer. We can identify the location into which 
    code is downloaded using the command -deno info-    
    
    The modules and functions can be found from the "remote modules cache" . If we would wish to clear the file that we just downloaded, we would have to remove it
    from the directory. 
    
    Typically however, addresses also contain information about the version of the functions. The version numbers are used to keep track of changes and also to avoid
    the problem with downloaded code being out of date*/

