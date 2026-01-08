import Snack from "./Snack";
import { array } from "../library/array";

// the Snacks function takes Snack and applies the items from the imported array to it using ther .map method, which loops through the array and returns JSX elements for each.

function Snacks() {
  return (
    <>
      <header className="subheader">
        <h2>Using .map method to render an array of objects:</h2>
        <p>
          *** also providing the object ID for each as the key, as with data
          from a DB ***
        </p>
      </header>

      {/* the .map method MUST have a return command */}
      {array.map((item) => {
        return <Snack key={item.id} item={item} />;
      })}
    </>
  );
}

export default Snacks;
