import { useState } from "react";

export default function FilterArray() {
  const [containP, setContainP] = useState(false);
  //   const [containA, setContainA] = useState(false);
  //   const [containI, setContainI] = useState(false);

  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  return (
    <div>
      <button onClick={() => setContainP(!containP)}>
        filter all containing "P"
      </button>

      {/* <button>filter all containing "A"</button>
      <button>filter all containing "I"</button> */}

      {containP ? Words.map
          <p>{word.includes("p")}</p> : null}
      ;
    
    </div>
  );
}
