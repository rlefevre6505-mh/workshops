//import express
import express, { request } from "express";

//initialise express
const app = express();

//tell express we want to use json to manipulate data
app.use(express.json());

//set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`server is running in localhost:${port}`);
}); // this is just for our reference

//TODO: set up a root route to RAED a welcome message
//route = "/"
app.get("/", function (request, response) {
  response.json({ messgae: "welcome to the root route" });
}); //  this is written as an object as we have specified that it will be in json!

//we need to tell the server where to connect to the database....
//
//
