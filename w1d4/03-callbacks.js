// Functions
// Referencing
// Calling

// Referencing
// Structural type (array, object)


// Higher Order Functions (HOFs)



const listOfNames = ["Jesse", "Manav", "Brendan", "Odu", "Boxin"];
const anotherListOfNames = ["Francis"];


// Considering that listOfNames is an array, and something is a function definition/expression

const doSomethingToEveryone = (listOfNames, something) => {
  for(const name of listOfNames){
    something(name)
  }
}


doSomethingToEveryone(listOfNames, console.log)


const sayGoodMorning = (name) => console.log(`Good morning ${name}`)

doSomethingToEveryone(listOfNames, sayGoodMorning)

// doSomethingToEveryone is a higher order function
// HOF => either using a function as a parameter or it returns a function definition, or both