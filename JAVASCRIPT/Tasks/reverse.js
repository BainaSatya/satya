const prompt = require("prompt-sync")();

var number = parseInt(prompt("Enter the number : "));

var reverse = 0;


while(number > 0){

     var digit = number % 10
     reverse = reverse*10 + digit
     number = Math.floor(number/10)
}

console.log("Reverse of the number : ",reverse)
