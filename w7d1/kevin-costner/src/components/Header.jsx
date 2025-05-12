export default function Header(props) {
  const { amountOfPlants } = props;

  return (
    <header className="Header">
      <h1>Kevin's watering world</h1>
      {amountOfPlants === 0 && <h2>Not saving any plants from dehydration</h2>}
      {amountOfPlants === 1 && <h2>Saving a lone plant from dehydration</h2>}
      {amountOfPlants > 1 && <h2>Saving {amountOfPlants} plants from dehydration</h2>}
    </header>
  );
}

{
  /* <header className="Header"> */
}
// The header tag has the attribute className with the value of Header
// Everything in a header can have multiple attributes and associated values
