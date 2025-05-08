import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Fancisco",
    "tokyo",
    "London",
    "Paris",
    "Melbourn",
    "Auckland",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
