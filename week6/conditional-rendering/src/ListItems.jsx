export default function ListItems() {
  const items = [
    {
      title: "one thing",
      id: 1,
    },
    { title: "another thing", id: 2 },
  ];
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item) => <li key={item.id}>{item.title}</li>)
      ) : (
        <li>No items</li>
      )}
    </ul>
  );
}
