var prompt = require("prompt-sync")();

var number = parseInt(prompt("Enter the number : "));

var sum = 0;

while (number > 0) {
  var digit = number % 10;
  sum = sum + digit;
  number = Math.floor(number / 10);
}
console.log("The total sum of digits is : ", sum);
