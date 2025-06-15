const fs = require('fs');

// function print(err, data) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   return data; 
// }

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log(err);
    // return;
  }
  let trimmedData = data.trim().split(/\s+/).join(" ");
  // console.log(trimmedData);

  fs.writeFile('a.txt', trimmedData,(err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("fill is cleaned and written");
    }
  })
})

