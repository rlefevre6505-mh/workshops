import { useState } from "react";
import "./App.css";
import ListItems from "./ListItems";
import FilterArray from "./FilterArray";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Hello there!</p>}
      <ListItems />
      <FilterArray />
    </div>
  );
}

export default App;
