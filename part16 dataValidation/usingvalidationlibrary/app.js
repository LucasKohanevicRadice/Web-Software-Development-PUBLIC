// //  Songs and ratings

import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import renderMiddleware from "./middlewares/renderMiddleware.js";
import { executeQuery } from "./database/database.js";

const app = new Application();
const router = new Router();

app.use(renderMiddleware);

const getSongs = async () => {
  const songs = await executeQuery("SELECT * FROM songs");
  if (!songs) {
    return [];
  }
  return songs.rows;
};

const showForm = async ({ render }) => {
  render("index.eta", { songs: await getSongs(), name: "", rating: "" });
};

const addSongAndRating = async (songName, songRating) => {

    await executeQuery("INSERT INTO songs(name, rating) VALUES($1, $2)",
    songName,
    songRating)
}

   
const validate = async (request) => {

    const errors = {
      errorsList: [],
      name: "",
      rating: "",
    }

    const body = request.body()
    const params = await body.value 
    
    const songName = params.get("name")
    const songRating = Number(params.get("rating"))

    const paramsLength = songName.length + params.get("rating")

    if (paramsLength === 0 || songName.length < 5 || songName.length > 20) {
        errors.errorsList.push("Song name must be between 5 and 20 characters long")
        errors.name = songName
        errors.rating = params.get("rating")
    }

    if (paramsLength === 0 || songRating < 1 || songRating > 10 || /^\d+$/.test(params.get("rating")) === false ) {
        errors.errorsList.push("Rating must be a number between 1 and 10")
        errors.rating = params.get("rating")
        errors.name = songName
    
    }
    // console.log(`validate function: errors.errorslist: ${errors.errorsList}, name: ${errors.name}, rating: ${errors.rating}`)
    return errors
}

const bodyValues = async (request) => {
  const body = await request.body()
  const params = await body.value

  const name = params.get("name")
  const rating = params.get("rating")

  const values = {
    name: name,
    rating: rating
  }

  return values
}

const submitForm = async ({ response, request, render }) => {

    const errors = await validate(request)
    const errorLength = errors.errorsList.length + errors.name.length + errors.rating.length 

    if (errorLength > 0) {

      const renderData = {
        songs: await getSongs(),
        name: errors.name,
        rating: errors.rating,
        errors: errors.errorsList
      }
      render("index.eta", renderData)
    }

    else {  

      const values = await bodyValues(request)
      // console.log(`name: ${values.name} rating: ${values.rating}`)
      await addSongAndRating(values.name, values.rating)
      response.redirect("/")

    } 
};

router.get("/", showForm);
router.post("/", submitForm);

app.use(router.routes());

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app;


// Name and year of birth

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const showForm = ({ render }) => {
//   render("index.eta");
// };

// const submitForm = async ({ request, render }) => {

//     const body = request.body() 
//     const params = await body.value
//     console.log(typeof(params)) 

//     const name = params.get("name")
//     const yearOfBirth = params.get("yearOfBirth")
//     // console.log(yearOfBirth)

//     const errorData = {
//         errors: [],
//         name: "",
//         yearOfBirth: "",
//     }

//     const errors = errorData.errors 
//     errorData.name = name
//     errorData.yearOfBirth = yearOfBirth

//     if (name.length < 4) {

//         errors.push("Invalid name")
//     }

//     else if (/^\d+$/.test(yearOfBirth) === false) {

//         errors.push("Invalid year of birth")
        
//     }

//     else if (yearOfBirth < 1900 || yearOfBirth > 2000) {

//         errors.push("Year of birth should be between 1900 and 2000") 

//     }

//     if (errors.length > 0) {

//         render("index.eta", errorData)
//     }

//     else{
//         render("index.eta")
//     }
    
// };

// router.get("/", showForm);
// router.post("/", submitForm);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;


//  Name and address

// import { Application, Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
// import renderMiddleware from "./middlewares/renderMiddleware.js";

// const app = new Application();
// const router = new Router();

// app.use(renderMiddleware);

// const showForm = ({ render }) => {
//   render("index.eta");
// };

// const submitForm = async ({ response, request }) => {
//     const body = request.body()
//     const params = await body.value

//     const name = params.get("name")
//     const address = params.get("address")

//     if (name.length < 4) {
//         response.body = "Invalid name"
//     }

//     else if (address.length < 6) {
//         response.body = "Invalid address"
//     }

//     else {
//         response.body = "Ok!";
//     }

    
// };

// router.get("/", showForm);
// router.post("/", submitForm);

// app.use(router.routes());

// if (!Deno.env.get("TEST_ENVIRONMENT")) {
//   app.listen({ port: 7777 });
// }

// export default app;