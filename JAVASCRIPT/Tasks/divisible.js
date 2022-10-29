
var prompt = require("prompt-sync")();

var lower = parseInt(prompt("Enter the lower range limit :"))

var upper = parseInt(prompt("Enter the upper range limit : "))

var number = parseInt(prompt("Enter the number to be divisible by : "))

for(i = lower; i < upper+1; i++){

     if (i % number == 0){
          console.log(i);
     }      

}   