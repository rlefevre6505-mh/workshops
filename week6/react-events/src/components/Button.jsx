// version1 - inline event handling

// function MyButton() {
//   return (
//     <button onClick={() => console.log("Button clicked!")}>Click me!</button>
//   );
// }

// Version 2 - separate function
function MyButton() {
  function MyFunction(name) {
    console.log(`You clicked me, ${name}`);
  }

  return (
    <button className="text-[3rem]" onClick={MyFunction("Tim")}>
      Click me!
    </button>
  );
}

export default MyButton;
