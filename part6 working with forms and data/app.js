//  POST/Redirect/GET


import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const server = serve({ port: 7777 });

const data = {
  content: "Nothing",
};

const processBody = async (request) => {
  const bodyArr = await Deno.readAll(request.body);
  const body = new TextDecoder().decode(bodyArr);
  const params = new URLSearchParams(body);
  data.content = params.get("content");
};

for await (const request of server) {
  if (request.method === "GET") {
    request.respond({body: await renderFile("index.eta", data)});
  }

  else if (request.method === "POST") {
    await processBody(request)
    request.respond({
      status: 303,
      headers: new Headers({
        "Location": request.url
      })
    })
  }
}



// Songs and their durations


// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//   songs: [],
// };


// const processBody = async (request) => {
//   const bodyArr = await Deno.readAll(request.body);
//   const body = new TextDecoder().decode(bodyArr);
//   const params = new URLSearchParams(body);
  
//   const song = {
//       name: params.get("name"),
//       duration: params.get("duration")
//   }

//   data.songs.push(song)
// }



// for await (const request of server) {
//   if (request.method === "POST") {
//     await processBody(request);
//   }

//   request.respond({ body: await renderFile("index.eta", data) });
// }



//  A list of emperors 

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const server = serve({ port: 7777 });

// const data = {
//     emperors: [],
// }

// const processBody = async (request) => {
//   const bodyArr = await Deno.readAll(request.body);
//   const body = new TextDecoder().decode(bodyArr);
//   const params = new URLSearchParams(body);
//   data.emperors.push(params.get("name"))
// };

// for await (const request of server) {

//     if (request.method === "POST") {
//         await processBody(request)
//     }

//   request.respond({ body: await renderFile("index.eta", data) });
// }





// Previously submitted

// import { serve } from "https://deno.land/std@0.106.0/http/server.ts"
// import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts"

// configure({
//     views: `${Deno.cwd()}/views/`
// })

// const server = serve({port: 7777})

// const data = {

//     content: "Nothing"
// }


// const processBody = async (request) => {

//     const bodyArr = await Deno.readAll(request.body)
//     const body = new TextDecoder().decode(bodyArr)
//     const params = new URLSearchParams(body)
//     data.content = params.get("content")
// }

// for await (const request of server) {

//     if (request.method === "POST") {
//         await processBody(request)
//     }

//     request.respond({ body: await renderFile("index.eta", data)})
// }

