//  Serving two files

import {serve} from "https://deno.land/std@0.106.0/http/server.ts"
import {serveFile} from "https://deno.land/std@0.106.0/http/file_server.ts"
// import {existsSync} from "https://deno.land/std@0.106.0/fs/exists.ts"

const server = serve({ port: 7777 })

for await(const request of server) {

    const path = `${Deno.cwd()}/static${request.url}}`

    if (path.includes("/index.html")  || path.includes("/about.html")){
        const response = await serveFile(request, path)
        request.respond(response)
    }

    else {
        request.respond({body: "Hello files!"})
    }

    // if (existsSync(path)) {

    //     const response = await serveFile(request, path)
    //     request.respond(response)
    // }

    // else {
    //     request.respond({body: "Hello files!"})
    // }


}




//  Serving html


// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { serveFile } from "https://deno.land/std@0.106.0/http/file_server.ts"

// const server = serve({ port: 7777 });

// for await (const request of server) {

//     const response = await serveFile(request, "static/index.html")

//   request.respond(response);
// }







//  Creating a Menu


{/* <nav>

    <a href="/menu.html"><h1>Menu</h1></a>
    <ol>
    <li><a href="/appetizers.html">Appetizers</a></li>
    <li><a href="/entrees.html">Entrees</a></li>
    <li><a href="/desserts.html">Desserts</a></li>
    <li><a href="/drinks.html">Drinks</a> </li>
    </ol>

</nav> */}






// Creating a from

{/* <form method="POST" action="/details">

    <label for="email">Email: </label>
    <input type="email" id="email" name="email"/>
    <br/>

    <label for="password">Password: </label>
    <input type="password" id="password" name="password"/>
    <br/>

    <label for="nickname">Nickname: </label>
    <input type="text" id="nickname" name="nickname"/>
    <br/>

    <label for="yearOfBirth">Year of birth: </label>
    <input type="number" id="yearOfBirth" name="yearOfBirth"/>
    <br/>

    <label for="favoriteColor">Favorite colour: </label>
    <input type="color" id="favoriteColor" name="color"/>
    <br/>

    <input type="submit" value="Submit details"/>
    

</form> */}






// Modifying a form

{/* <h1>Add a user</h1>
<form method="POST" action="/users">
    <label for="name">Name: </label>
    <input type="text" name="name">
     <br/>
    <label for="email">Email: </label>
    <input type="email" name="email">
    <br/>
    <input type="submit" value="Create user" />
</form> */}




// Noughts n crosses
{/* <table>
    <tr>
    <td>X</td><td></td><td></td>
    </tr>

    <tr>
    <td></td><td>X</td><td>O</td>
    </tr>

    <tr>
    <td></td><td></td><td>O</td>
    </tr>

    
</table>
 */}
