// the snack component uses "item" as a prop. This will be each item in an array, in thus case an array of objects

function Snack({ item }) {
  return (
    <div>
      <h3 className="font-mono">
        {item.name} by {item.manufacturer}
      </h3>
      <p className="italic font-mono">{item.year}</p>
    </div>
  );
}

export default Snack;
