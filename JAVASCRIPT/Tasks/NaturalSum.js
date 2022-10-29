
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter the number : "));

let sum = 0;

while (num > 0) {

  sum = sum + num;

  num = num - 1;

}

console.log(`The sum of natural numbers is : ${sum}`);
