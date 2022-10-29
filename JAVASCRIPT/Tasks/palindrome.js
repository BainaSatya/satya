
const prompt = require("prompt-sync")();

var number = parseInt(prompt("Enter a number : "));

var k = number;

var reverse = 0;

while(number>0){
     var digit = number % 10;
     reverse = reverse * 10 + digit;
     number = Math.floor(number/10);
}

if(k == reverse){
     console.log("The number is a palindrome!")
}
else{
     console.log("The number is not a palindrome!")
}


















// In [14]: num = int(input("Enter the number : ")) count = 0 while num > 0:     count = count + 1     num = num // 10 print("The number of digits in the number are :", count) 
