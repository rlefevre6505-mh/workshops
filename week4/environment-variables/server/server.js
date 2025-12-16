//import nodes
import express from "express"; // express makes the server
import cors from "cors"; // works wiht express to create cors configuration options
import dotenv from "dotenv"; // allows .env file use
import pg from "pg"; // postgreSQL client for node

//store express in a variable
const app = express();

//tell it we want to use json and cors
app.use(express.json());
app.use(cors());

//set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`server running in Localhost:${PORT}`);
});

// set up a root route to READ a welcome message
app.get("/", function (request, response) {
  response.json({ message: "Welcom to the root route!" });
});

//alternative route (not root!) if needed
app.get("/alternative", function (request, response) {
  response.json({ message: "You're no longer in the root route!" });
});

//configure dotenv
dotenv.config();

//set up a new endpoint for images ( in this case async/await are used due to the API)
app.get("/images", async function (req, res) {
  const api = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`;
  const response = await fetch(api);
  const imageData = await response.json();
  //console.log here in case of error for dignostics!
  res.json(imageData.results);
});

//initialise our server pool object, using pg
// pg accepts a configuration object, and in this case, we provide a connection string
const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

// my table created in SQL:
// CREATE TABLE favouriteFoods (
//   id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   name TEXT,
//   nationality TEXT,
//   vegetarian BOOL,
//   rating INT
// )

//now we can use the db object to run queries
app.get("/foodcreate", function () {
  db.query(
    `INSERT INTO favouriteFoods (name, nationality, vegetarian, rating) VALUES ('burger', 'American', false, 9)`
  );
});

app.get("/foodread", async function (request, response) {
  const query = await db.query("SELECT name, vegetarian FROM favouriteFoods");
  console.log(query);
  response.json(query.rows);
});
