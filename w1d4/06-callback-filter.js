// // Complex conditions with callbacks!


// const arrayOfNumbers = [24,352,5,235,3292,543]

// // num % 2 === 0


// // const result = arrayOfNumbers.filter(num => num % 2 === 0)
// const result = arrayOfNumbers.filter(num => num > 50)

// console.log(result)


const grade1 = {
  subject:"Science",
  score:80
}

const grade2 = {
  subject:"French",
  score:50
}


const strictParentsHappy = (grade) => {
  if(grade.subject === "French"){
    return grade.score > 60
  }

  return grade.score > 70
}


const randomParentsHappy = () => {
  return Math.random() > 0.5
}


const outputParentsMessage = (grade, parent) => {
  const happy = parent(grade)

  if(happy){
    return console.log("GOOD JOB")
  }

  return console.log("I AM DISAPPOINT")
}

outputParentsMessage(grade1, strictParentsHappy)
outputParentsMessage(grade2, strictParentsHappy)
outputParentsMessage(grade1, randomParentsHappy)