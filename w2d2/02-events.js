const EventEmitter = require("events");

let count = 0;
const coffeeCounter = new EventEmitter();


coffeeCounter.addListener("coffeeReady", () => {
  console.log(`Coffee person #${count}: Thank you!`);
  count++
});

coffeeCounter.emit("coffeeReady");
coffeeCounter.emit("coffeeReady");
coffeeCounter.emit("coffeeReady");
coffeeCounter.emit("coffeeReady");
coffeeCounter.emit("coffeeReady");