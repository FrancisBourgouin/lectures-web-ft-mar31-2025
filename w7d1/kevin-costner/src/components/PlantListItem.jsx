import { checkIfWellWatered } from "../helpers/dateHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval)
  
  const plantListStyle = {
    borderColor:isWellWatered ? "green" : "red",
    color:isWellWatered ? "green" : "red",
  }

  return (
    <article className="PlantListItem" style={plantListStyle}>
      <h1>{name} - {type}</h1>
      <p>Last watered on: {lastWatered}</p>
    </article>
  );
}
