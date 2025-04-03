// Why do we want functions?

// Better code organization
// Code reusability
// Easier to mesh code together (legibility)
const listOfNames = ["Jesse", "Manav", "Brendan", "Odu", "Boxin"];
const anotherListOfNames = ["Francis"];

const sayGoodMorningToEveryone = () => {
  const listOfNames = ["Jesse", "Manav", "Brendan", "Odu", "Boxin"];

  for (const name of listOfNames) {
    console.log(`Good morning ${name}!`);
  }
};

// sayGoodMorningToEveryone();

// Power of functions => Accepting arguments / parameters

const sayGoodMorningToEveryoneR1 = (listOfNames) => {
  for (const name of listOfNames) {
    console.log(`Good morning ${name}!`);
  }
};

// sayGoodMorningToEveryoneR1(listOfNames)
// sayGoodMorningToEveryoneR1(anotherListOfNames)

const sayGoodMorningToEveryoneR2 = (listOfNames, isGoodMorning) => {
  let greeting = "";

  if (isGoodMorning) {
    greeting = "Good morning";
  } else {
    greeting = "Good evening";
  }

  for (const name of listOfNames) {
    console.log(`${greeting} ${name}!`);
  }
};

// sayGoodMorningToEveryoneR2(listOfNames, true)
// sayGoodMorningToEveryoneR2(listOfNames, false)

const sayGoodMorningToEveryoneR3 = (listOfNames, isGoodMorning, isYelling) => {
  let greeting = "";

  if (isGoodMorning) {
    greeting = "Good morning";
  } else {
    greeting = "Good evening";
  }

  for (const name of listOfNames) {
    let message = `${greeting} ${name}!`;

    if (isYelling) {
      console.log(message.toUpperCase());
    } else {
      console.log(message);
    }
  }
};

sayGoodMorningToEveryoneR3(["bob", "bobby", "bobby-tron"], true, true);

// What can we put as a function argument / param ?

// 