// Functions

// Function definition

function someFunctionDefinition(){
  console.log("Hello!")
}

// Function expressions

const someFunctionExpression = function(){
  console.log("Fct referenced to a variable")
}

// Function expressions (arrow)

const someArrowFunction = () => {
  console.log("Some arrow function!")
}

const someArrowFunctionInline = () => console.log("Hello again!")


// Callbacks
// Relationship status, you are THE callback of a higher order function

// Higher Order Functions (HOFs)
// Takes a function as a parameter/argument

const thatsNotAHOF = () => {
  someArrowFunction()
}

const thatsAHOF = (someAction) => {
  someAction()
}

thatsAHOF(someArrowFunction)

// Reduces bloat
// DRY