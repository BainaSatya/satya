const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter the number : "));

let a = 0;

for (let i = 2; i < Math.floor(num / 2) + 1; i++) {

  if (num % i == 0) {

    a = a + 1;
  }
}

if (a <= 0) {

  console.log(`${num} is Prime`);

} else {

  console.log(`${num} is Not a Prime`);
  
}
