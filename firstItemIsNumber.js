const prompt = require("prompt-sync")({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));

let firstItem = userArray[0];
//console.log(isNaN(firstItem))

if(isNaN(firstItem) === false){
    console.log(true);
}else if(isNaN(firstItem) === true){
    console.log(false);
}

//["cat","dog","fish"]
//["1","dog","fish"]