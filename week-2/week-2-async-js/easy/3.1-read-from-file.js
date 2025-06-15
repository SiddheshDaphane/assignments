const fs = require('fs'); 

function print(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

fs.readFile('3.1-a.txt', 'utf-8', print);
console.log('Done');


function expernsive() {
  let sum = 0;
  for (let i=0; i < 1000000000; i++) {
    sum += 1;
  }
  console.log('Expensive operation done');
}
expernsive();