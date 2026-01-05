import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to my first app in React!</h1>
        <img src={reactLogo} alt="react-logo" class="react-logo"></img>
        <p>This was created using Vite</p>
      </div>
      <button
        // onClick={() => (this.classList.add = "flex-div")}
        class="reverse-button"
      >
        Click Me!
      </button>
      <div class="flex-div">
        <p>This</p>
        <p>Is</p>
        <p>A</p>
        <p>Flex</p>
        <p>Box</p>
      </div>
    </>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
