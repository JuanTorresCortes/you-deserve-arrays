const prompt = require("prompt-sync")({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));
let arrLength = userArray.length;
console.log(arrLength);

if (arrLength >= 10) {
  console.log(true);
} else if (arrLength < 10) {
  console.log(false);
}

//["1","2","3","4","5","6","7","8","9","10","11","12"];
