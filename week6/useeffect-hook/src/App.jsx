import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  //useState starts as an empty array becuase
  const [items, setItems] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [showPhoto, setShowPhoto] = useState(false);

  //useEffect contains the fetch function as a callback in order to avoid creating an infinfite loop
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     const data = await response.json();
  //     setItems(data);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      const data = await response.json();
      setItems(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchPhotoData() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setPhotos(data.message);
    }
    fetchPhotoData();
  }, [showPhoto]);

  //return works as normal
  return (
    <div>
      <div className="flex-div">
        <h1>Dogs</h1>
        <button onClick={() => setShowPhoto(!showPhoto)}>
          {!showPhoto ? "Show me a dog!" : "I dont' like this dog!"}
        </button>
        {showPhoto ? <img src={photos} alt="a random dog"></img> : null}
      </div>
      <ul>
        {items.map((item) =>
          //Conditional rendering only breeds beginning with "A", only running the map function on the array item if it meets the condition
          item.attributes.name.charAt(0) === "A" ? (
            <li key={item.id}>
              {item.attributes.name}
              <p>{item.attributes.description}</p>
              <p>
                Max lifespan: {item.attributes.life.max}years<br></br>Max
                weight: {item.attributes.male_weight.max}kg
              </p>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
