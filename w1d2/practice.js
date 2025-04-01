// I need a function that will find the biggest value in a list of numbers
// The output should be an array where the first value is the index, and the second is the value

// Initialize an index / start value
// Maybe sort the array and pick the last one / first one
// Compare values against a buffer
// 

// IN: Array of numbers [1,2,3,4]
// We don't need to validate that the array is fine


// Create a buffer value for index, assign it the first index of the array (0)
// Loop over all the elements of the array
  // Compare the current value against the array at the buffer index
  // If the buffer is smaller, replace with current value
// return the value and the index

// OUT: Array [index, value]


const findBiggestNumber = function(listOfNumbers){
  let bufferIndex = 0;

  for(let i = 0; i < listOfNumbers.length; i++){
    const bufferValue = listOfNumbers[bufferIndex]
    const currentValue = listOfNumbers[i]

    if(currentValue > bufferValue){
      bufferIndex = i
    }
  }

  return [bufferIndex, listOfNumbers[bufferIndex]]
}


const result = findBiggestNumber([13,24,314,53125,15,1,142,1,24])

console.log(result)



const someArray = [1,2,42,43,5]

for(let i = 0; i < someArray.length; i++){
  const number = someArray[i]
}


for(const number of someArray){
  
}