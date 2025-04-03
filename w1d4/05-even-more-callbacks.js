const listOfNames = ["Jesse", "Manav", "Brendan", "Odu", "Boxin"];

const forEachElement = (someArray, doSomething) => {
  for (let index = 0; index < someArray.length; index++) {
    const currentValue = someArray[index];

    doSomething(currentValue, index, someArray);
  }
};

const sayGoodMorningButMaybeYellIt = (name, isYelling) => {
  if (isYelling) {
    return console.log(`Good morning ${name}!`.toUpperCase());
  }

  return console.log(`Good morning ${name}!`);
};

// Adapter function
const yellGoodMorning = (name) => sayGoodMorningButMaybeYellIt(name, true);
const sayGoodMorning = (name) => sayGoodMorningButMaybeYellIt(name, false);

forEachElement(listOfNames, yellGoodMorning);
forEachElement(listOfNames, sayGoodMorning);

// ANONYMOUS FUNCTIONS

forEachElement(listOfNames, (name) => sayGoodMorningButMaybeYellIt(name, true));

const logTheDouble = (number) => console.log(number * 2);

forEachElement([1, 234, 43, 314, 124, 124], logTheDouble);
forEachElement([1, 234, 43, 314, 124, 124], (number) => console.log(number * 2));
