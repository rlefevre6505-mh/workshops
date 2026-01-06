import React from "react";
import { useState } from "react";

export default function Button() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={handleClick} className={isActive ? `active` : ``}>
        Click me!
      </button>
    </div>
  );
}
