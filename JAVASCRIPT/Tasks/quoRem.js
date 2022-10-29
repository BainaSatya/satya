var prompt = require("prompt-sync")();

let number1  = parseInt(prompt("Enter the first number : "))

let number2 = parseInt(prompt("Enter the second number: "))
 
const quotient = Math.floor(number1 / number2)
 
const remainder = number1 % number2

console.log(`quotient is : ${quotient}`) 

console.log(`remainder is : ${remainder}`) 

