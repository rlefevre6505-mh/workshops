import "./App.css";
import ButtonMinus from "./Components/ButtonMinus";
import ButtonPlus from "./Components/ButtonPlus";
import { useState } from "react";

function App() {
  const [int, setInt] = useState(0);

  function intPlus() {
    setInt(int + 1);
  }
  function intMinus() {
    setInt(int - 1);
  }
  function resetInt() {
    setInt(int - int);
  }

  return (
    <>
      <ButtonPlus intPlus={intPlus} />
      <ButtonMinus intMinus={intMinus} />
      <p onClick={resetInt} className="text-red-600">
        {int}
      </p>
    </>
  );
}

export default App;

//this can be achieved using only 1 button component, and using props!
// to do this, the function to be called would need to be a prop, as well as
