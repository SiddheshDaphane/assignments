// Create a counter in JavaScript


// 1. Approach 1
let counter = 0 

function updateCounter() {
  counter++;
  console.log(counter);
};

setInterval(updateCounter, 1000);


// 2. Approach 2
// setInterval(callbackFunction, delayInMilliseconds);

counter1 = 0
setInterval(() => {
  counter1++;
  console.log(counter1);
}, 2000)