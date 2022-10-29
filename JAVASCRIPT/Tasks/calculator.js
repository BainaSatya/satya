const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("Enter first number : "))
const n2 = parseInt(prompt("Enter second number : "))

const operator = prompt("Enter mathematical operator : ") 
if (operator == '+'){
     console.log("Result is: ", n1+n2)
} 
else if(operator == '-') {
     console.log("Result is: ", n1-n2)
}

else if(operator == '*') {
     console.log("Result is: ", n1*n2)
}

else if(operator == '/') {
     console.log("Result is: ", n1/n2)
}

else if(operator == '%'){
     console.log("Result is: ", n1%n2);
}

else if(operator == '**'){
     console.log("Result is: ", n1**n2);
}

else{
     console.log("invalid operator")
}