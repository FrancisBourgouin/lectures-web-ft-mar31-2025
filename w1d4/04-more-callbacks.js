const listOfNames = ["Jesse", "Manav", "Brendan", "Odu", "Boxin"];
const anotherListOfNames = ["Francis"];

const sayGoodMorningToEveryone = (listOfNames) => {
  for (const name of listOfNames) {
    // SAME
    console.log(`Good morning ${name}!`); // DIFFERENT ACTION
  }
};

const sayGoodEveningToEveryone = (listOfNames) => {
  for (const name of listOfNames) {
    // SAME
    console.log(`Good evening ${name}!`); // DIFFERENT ACTION
  }
};

const forEachElement = (someArray, doSomething) => {
  for (let index = 0; index < someArray.length; index++) {
    const currentValue = someArray[index];

    doSomething(currentValue, index, someArray);
  }
};

const sayGoodMorning = (name) => console.log(`Good morning ${name}!`);
const sayGoodEvening = (name) => console.log(`Good evening ${name}!`);

const sayGoodMorningButMaybeYellIt = (name, isYelling) => {
  if (isYelling) {
    return console.log(`Good morning ${name}!`.toUpperCase());
  }

  return console.log(`Good morning ${name}!`);
};

forEachElement(listOfNames, sayGoodMorning);
forEachElement(listOfNames, sayGoodEvening);
forEachElement(listOfNames, sayGoodMorningButMaybeYellIt);

listOfNames.forEach(sayGoodMorning)
