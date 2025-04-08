// console.log("Hello!");

// setTimeout(() => {
//   console.log("How are you?");
// }, 1000);

// console.log("Pretty good thanks!");

// Called console.log with hello (SYNC)
// Called setTimeout with a callback that console.log how are you (wait 1s) (SYNC)
// Called console.log with Pretty good thanks (SYNC)

// Wait 1000ms
// Called the callback of timeout and ran console.log with how are you (ASYNC)

// console.log("Hello!");

// setTimeout(() => {
//   console.log("Jinx!");

//   setTimeout(() => {
//     console.log("Jinx!");
//   }, 1000);
// }, 1000);

// // OR 

// setTimeout(() => {
//   console.log("Jinx!");
// }, 1000);

// setTimeout(() => {
//   console.log("Jinx!");
// }, 2000);

// console.log("Pretty good thanks!");

// Called console.log with hello (SYNC)
// Called setTimeout with a callback that console.log jinx! (wait 1s) (SYNC)
// Called setTimeout with a callback that console.log jinx! (wait 1s) (SYNC)
// Called console.log with Pretty good thanks (SYNC)

// Wait 1000ms
// Call the callback with console.log jinx
// Call the callback with console.log jinx


// const listOfNumbers = [1,7,10,1000,2000,50,33,9]

// for(const number of listOfNumbers){
//   setTimeout(() => {
//     console.log(number)
//   }, number)
// }

// SLOWEST SORT EVER!!!


// console.log("ZEROETH")

// setTimeout(() => {
//   console.log("FIRST!")
// },0)

// setTimeout(() => {
//   console.log("LAST!")
// },0)


// CHICKEN ARMY

// const setInterval1 = setInterval(() => {
//   console.log("🐔🐔🐔🐔🐔🐔")

//   // if(Math.random() > 0.5){
//   //   clearInterval(setInterval1)
//   // }
// }, 500)


// setTimeout(() => {
//   clearInterval(setInterval1)
// },10000)


// setTimeout(() => {
//   console.log("Jinx!");

//   setTimeout(() => {
//     console.log("Jinx!");
//   }, 1000);
// }, 1000);