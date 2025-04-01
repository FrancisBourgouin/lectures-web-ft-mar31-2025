// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored


// IN: Multiple values from the terminal (shaped as an array)

// Get the values from the terminal
// Initialize a sum buffer (it will start at 0)
// Loop over all the values
//  Check if it's a valid number (isNumber ??) NO NAN!
//  If true, add to the number
// Return the sum buffer value

// OUT: Number (Sum of all valid values)


console.log(process.argv)


// sumOfArray
// sumOfNumbers

// [
//   '/home/francis/.nvm/versions/node/v20.12.2/bin/node',
//   '/home/francis/lighthouse/lectures/web-ft-mar31-2025/w1d2/sum.js',
//   '1',
//   '24',
//   '24',
//   '1422',
//   '14',
//   'wdokwdokd',
//   'dwodwwok',
//   '10139',
//   'false'
// ]




const calculateSumOfNumbers = function(listOfValues){
  let sumBuffer = 0

  for(const value of listOfValues){
    const parsedValue = Number(value)

    if(!Number.isNaN(parsedValue)){
      sumBuffer += parsedValue
    }
  }

  return sumBuffer
}


const result = calculateSumOfNumbers(process.argv)

console.log(result)