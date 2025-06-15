
// If you want to write, then read, or read, then write, you must chain them properly.

const fs = require('fs')

function print(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

function write(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Written Succesffuly");
  }
  fs.readFile('3.1-a.txt','utf-8',print);
}

function appendText(err){
  if(err) {
    console.log(err);
  } else {
    console.log("appended successfully!")
  }
  fs.readFile('3.1-a.txt','utf-8',print);
}

fs.appendFile('3.1-a.txt', '\nadded JavaScript', appendText);
fs.writeFile('3.1-a.txt','Siddhesh Daphane',write);