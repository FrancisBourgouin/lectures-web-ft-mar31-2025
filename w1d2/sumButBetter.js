// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

const generateValidListOfNumbers = function (listOfValues) {
  let arrayBuffer = [];

  for (const value of listOfValues) {
    const parsedValue = Number(value);
    const isAValidNumber = !Number.isNaN(parsedValue);

    if (isAValidNumber) {
      arrayBuffer.push(parsedValue);
    }
  }

  return arrayBuffer;
};

const calculateSumOfNumbers = function (listOfNumbers) {
  let sumBuffer = 0;

  for (const number of listOfNumbers) {
    sumBuffer += number;
  }

  return sumBuffer;
};



const cleanListOfNumbers = generateValidListOfNumbers(process.argv)

const result = calculateSumOfNumbers(cleanListOfNumbers)

console.log(result)