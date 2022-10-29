
const prompt = require("prompt-sync")();

function bill_amount_after_discount(bill_amount, discount_percentage) {

  var discount_amount = bill_amount * (discount_percentage / 100);

  var final_bill_amount = bill_amount - discount_amount;

  return final_bill_amount;
}

var bill_amount = parseInt(prompt("enter bill amount : "));

var discount_percentage = parseInt(
     prompt("how much discount you want to give (in percentage) : ")
);

var final_bill_amount = bill_amount_after_discount(
  bill_amount,
  discount_percentage
);

console.log(final_bill_amount);
