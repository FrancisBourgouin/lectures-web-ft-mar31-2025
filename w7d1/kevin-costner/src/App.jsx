import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsArr } from "./data/plantData";

function App() {
  const amountOfPlants = plantsArr.length

  return (
    <>
      <Header amountOfPlants={amountOfPlants}/>
      <main>
        <PlantList plants={plantsArr}/>
      </main>
    </>
  );
}

export default App;

// -header
//       -h1
// -main
//     -section
//         -article
//             -h1 name + type
//             -p last watered
//         -article
//             -h1 name + type
//             -p last watered
//          ...
