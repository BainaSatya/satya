var prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter an integer : "))

let a = []

for(i = 2; i < num+1; i++){
     if (num % i == 0){
          a.push(i) 
     } 
} 

a.sort() 

console.log(`smallest divisor is : ${a[0]}`) 