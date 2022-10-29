var prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter the number : "))

let count = 0 

while (num > 0){
     count = count + 1    
     num = Math.floor(num / 10)
}     

console.log(`The number of digits in the number : ${count}`)