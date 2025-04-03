// Existential questions!

// Function definition, hoisting

function someFunction(){
  console.log("Hello!")
}

// Function expression

const someOtherFunction = function(){
  console.log("Hello again!")
}

// Arrow function expression
// When it's a simple task we can implicitely return

const someArrowFunction = () => {

}

const addTwoNumbers = (num1, num2) => {
  return num1 + num2
}

const betterAddTwoNumbers = (num1, num2) => num1 + num2;

// Anonymous functions => A function with no name

// betterAddTwoNumbers(5,10)

// ((num1, num2) => num1 + num2)


// IIFE
// Immediatly Invoked Function Expression

(function(){
  const name = "Manav"
  console.log(`Hello ${name}`)
})()

(function(){
const name = "Odu"
console.log(`Hello ${name}`)
})()


// Functions, Arrays, Objects and you!
