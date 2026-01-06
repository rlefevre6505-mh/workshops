import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  function add1() {
    setNum(num + 1);
  }

  function minus1() {
    setNum(num - 1);
  }

  function times10() {
    setNum(num * 10);
  }

  function divide2() {
    setNum(num / 2);
  }

  return (
    <div>
      <Button handler={add1} text="add 1" />
      <Button handler={minus1} text="minus 1" />
      <Button handler={times10} text="multiply by 10" />
      <Button handler={divide2} text="divide by 2" />
      <p className="mt-4 text-[3rem]">{num}</p>
    </div>
  );
}

export default App;
