import express, { json, request } from "express"; // this imports all of express, as dont always know which parts we will need

const app = express(); // this packages the large express object in a variable

//allow server to receieve infomration in request
app.use(express.json());

//this will be our JSON object
const birdsArray = [
  {
    name: "parrot",
    habitat: "jungle",
    size: "medium",
  },
  {
    name: "starling",
    habitat: "temperate",
    size: "small/medium",
  },
  {
    name: "puffin",
    habitat: "coastal",
    size: "small",
  },
];

app.get("/messages", function (request, response) {
  response.json(birdsArray);
});

app.listen(3000, function () {
  console.log("server is listening to port 3000");
});
//these set the GET  ROUTE to localhost:3000/messages

//
// POST:
//
app.post("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
}); // this sets the POST ROUTE at localhost:3000/messages

// app.use(express.json());

// this allows express to understand the JSON request body by passing the JSON METHOD in express to the USE method on out APP. This is a middleware function that interprets json and makes it available to the route handler as REQ.BODY

app.post("/add", function (request, response) {
  const numA = request.body.a;
  const numB = request.body.b;
  response.json(`${numA} + ${numB} = ${numA + numB}`);
});
//sending a POST REQUEST of "{ "a": 3, "b": 5 } to ".../add" will return "3 + 5 = 8"

//
// Mini Challenge:
//

const moviesArray = [
  {
    title: "Jurassic Park",
    genre: "adventure",
  },
  {
    title: "Harry Potter",
    genre: "fantasy",
  },
  {
    title: "Terminator",
    genre: "action",
  },
  {
    title: "Love Actually",
    genre: "romance",
  },
  {
    title: "Findind Nemo",
    genre: "family",
  },
];

//this returns the array of movies
app.get("/movies", function (request, response) {
  response.json(moviesArray);
});

//this returns a random movie's details in the string
app.get("/random", function (request, response) {
  const number = Math.floor(Math.random() * 5);
  response.json(
    `${moviesArray[number].title} is a ${moviesArray[number].genre} movie.`
  );
});

app.post("/movies", function (request, response) {
  //   for (let i = 0; i < moviesArray.length; i++) {
  //     response.json(`${moviesArray[i].title} ${moviesArray[i].genre}`);
  //   }
  response.json(request.body);
});
