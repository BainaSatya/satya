
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter an integer : "));

console.log('Prime Factors : ')

let i = 1;

while (i <= num) {

  let k = 0;

  if (num % i == 0) {

    let j = 1;

    while (j <= i) {

      if (i % j == 0) {

         k = k + 1;
      }

    j = j + 1;

    }

    if (k == 2) {

    console.log(i);

    }

  }

  i = i + 1;
}
