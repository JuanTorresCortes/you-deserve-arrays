const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let last = userArray.length-1;
console.log(userArray[last]);
//["cat", "dog", "fish"]