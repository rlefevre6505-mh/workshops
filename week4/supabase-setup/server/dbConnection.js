//TODO: set up a pool to send requests from the server to the database

//import a package called pg with "npm i pg" (pg is for postgress management)
import pg from "pg";

//configure .env file (dotenv is a package ot manage our .env file)
import dotenv from "dotenv";

dotenv.config();

//set up connection pool
export const db = new pg.pool({
  connectionString: process.env.DATABASE_URL,
});
// it must be exported so it can be used elsewhere in the folder
