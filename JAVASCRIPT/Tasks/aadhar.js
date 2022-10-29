const prompt = require("prompt-sync")();

const Aadhar = prompt("Enter Aadhar Number : ");
  

if (Aadhar.length == 12) {
  console.log("1. Length of Aadhar is Valid");
  if (!isNaN(Aadhar) == true) {
    console.log("2. Aadhar in digits are Valid");

    if (Aadhar[0] !== (0 && 1)) {
      console.log("3. Valid (should not starts with 0 and 1)");
    }
  }
} 

else {
  console.log("Invalid Aadhar number");
}

