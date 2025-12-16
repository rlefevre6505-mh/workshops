import express from "express";
import cors from "cors";
import { db } from "./dbconnection.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

app.get("/", (req, res) => res.json({ message: "Welcome to the server!" }));

app.post("/foodform", (req, res) => {
  const foodForm = req.body.formValues;
  const query = db.query(
    `INSERT INTO favouritefoods (name, nationality, vegetarian, rating) VALUES ($1, $2, $3, $4)`,
    [foodForm.name, foodForm.nationality, foodForm.vegetarian, foodForm.rating]
  );
  res.json({ status: "success", values: foodForm });
  console.log(formValues);
});
