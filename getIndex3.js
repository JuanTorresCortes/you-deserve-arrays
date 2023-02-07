const prompt = require("prompt-sync")({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));

if (userArray.length >= 3) {
  console.log(userArray[2]);
} else if (userArray.length < 3) {
  let lastItem = userArray.length - 1;
  console.log(userArray[lastItem]);
}

//  ["cat", "dog", "fish", "hamster", "Snuffleupagus"];
