import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  // const output = []
  // for(const plant of plants){
  //   output.push(<PlantListItem />)
  // }

  const parsedPlants = plants.map((plant) => (
    <PlantListItem
      key={plant.id}
      {...plant}
    />
  ));
  // const parsedPlants = plants.map((plant) => (
  //   <PlantListItem
  //     key={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     lastWatered={plant.lastWatered}
  //     wateringInterval={plant.wateringInterval}
  //   />
  // ));

  return <section className="PlantList">{parsedPlants}</section>;
}
