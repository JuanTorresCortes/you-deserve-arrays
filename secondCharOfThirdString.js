const prompt = require("prompt-sync")({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));
let thirdItem = userArray[2]
let secondChar = thirdItem[1]
//console.log(thirdItem)
//console.log(secondChar)

if(isNaN(thirdItem) === false){
    console.log("Error");
}else if(isNaN(thirdItem) === true){
    console.log(secondChar);
}
//["cat","dog","fIsh", "me"]
//["cat","dog","1"]
