// Make sure you have Node and NPM installed
// Run npm install 'prompt-sync' in the terminal

const prompt = require("prompt-sync")();

function banking() {
  var Notes_2000 = true;
  var Notes_500 = true;
  var Notes_200 = true;
  var Notes_100 = true;
  var Notes_50 = false;
  var Notes_20 = false;
  var Notes_10 = false;
  var ms = [];

  const user1 = "Gireesh@01";
  const pin1 = 7658;
  const id1 = [user1, pin1];

  const user2 = "Satya@2405";
  const pin2 = 9643;
  const id2 = [user2, pin2];

  const user3 = "Student@13";
  const pin3 = 1300;
  const id3 = [user3, pin3];

  console.log(`1. UserID : ${user1}, PIN Number : ${pin1}`);
  console.log(" ");
  console.log(`2. UserID : ${user2}, PIN Number : ${pin2}`);
  console.log(" ");
  console.log(`3. UserID : ${user3}, PIN Number : ${pin3}`);
  console.log(" ");

  console.log("Choose anyone of the Above...");
  console.log(" ");
  var amount = 1000;
  let UserID = prompt("Enter your UserID : ");
  console.log(" ");
  let password = prompt("Enter Your Password : ");
  console.log(" ");
  if (
    (UserID == id1[0] && password == id1[1]) ||
    (UserID == id2[0] && password == id2[1]) ||
    (UserID == id3[0] && password == id3[1])
  ) {
    console.log("Welcome to Banking Process");
    console.log(" ");

    while (true) {
      console.log("choose your option below (in numbers)");
      console.log(" ");
      console.log(
        "\n1.Deposit\n2.Withdraw\n3.Amount Transfer\n4.balance Enquiry\n5.Mini statement\n6.Exit"
      );
      console.log(" ");

      let opt = parseInt(prompt("Choose your Option : "));
      console.log(" ");

      if (opt == 6) {
        console.log("\nThank You for banking with us!");
        console.log(" ");
        break;
      } else if (opt == 5) {
        for (i in ms) {
          console.log(ms[i]);
        }
      } else if (opt == 4) {
        console.log("Avaliable Balance is : ", amount);
        console.log(" ");
      } else if (opt == 3) {
        var tr_user1 = "developer@123";
        var tr_account1 = "xxxxxxxx7043";

        var tr_user2 = "inkprog@123";
        var tr_account2 = "xxxxxxxx3820";

        var tr_user3 = "careerpedia@456";
        var tr_account3 = "xxxxxxxx1830";

        console.log(`1. UserID : ${tr_user1}, Account Number : ${tr_account1}`);
        console.log(" ");
        console.log(`2. UserID : ${tr_user2}, Account Number : ${tr_account2}`);
        console.log(" ");
        console.log(`3. UserID : ${tr_user3}, Account Number : ${tr_account3}`);
        console.log(" ");

        var tr_amount = 1000;

        var Transfer_User_ID = prompt("Enter Transfer UserID : ");
        console.log(" ");
        var Bank_acc = prompt("Enter Transfer Bank Account Number : ");
        console.log(" ");

        if (
          (Transfer_User_ID == tr_user1 && Bank_acc == tr_account1) ||
          (Transfer_User_ID == tr_user2 && Bank_acc == tr_account2) ||
          (Transfer_User_ID == tr_user3 && Bank_acc == tr_account3)
        ) {
          var At = parseInt(prompt("Enter the Transfer Amount : "));
          console.log(" ");

          if (At > 0 || At == 0 || At < 0) {
            tr_amount += At;
            amount -= At;

            a = console.log(
              Transfer_User_ID,
              "-->",
              At,
              "amount transferred successfully."
            );
            console.log(" ");

            console.log(a);

            ms.push([
              Transfer_User_ID,
              "-->",
              At,
              "amount transferred successfully.",
            ]);
          }
        } else {
          console.log("Invalid User ID");
          console.log(" ");
        }
      } else if (opt == 2) {
        var wd = parseInt(prompt("Enter the Withdraw Amount : "));
        console.log(" ");

        if (wd <= amount) {
          amount -= wd;
          count = 0;

          console.log(wd, "Withdraw amount successfully.");
          console.log(" ");
          ms.push([wd, "withdraw amount successfully."]);

          if (Notes_2000 && wd >= 2000) {
            console.log(Math.floor(wd / 2000), "--> 2000 notes");
            count = count + Math.floor(wd / 2000);
            wd = wd - Math.floor(wd / 2000) * 2000;
          }

          if (Notes_500 && wd >= 500) {
            console.log(Math.floor(wd / 500), "--> 500 notes");
            count = count + Math.floor(wd / 500);
            wd = wd - Math.floor(wd / 500) * 500;
          }

          if (Notes_200 && wd >= 200) {
            console.log(Math.floor(wd / 200), "--> 200 notes");
            count = count + Math.floor(wd / 200);
            wd = wd - Math.floor(wd / 200) * 200;
          }

          if (Notes_100 && wd >= 100) {
            console.log(Math.floor(wd / 100), "--> 100 notes");
            count = count + wd / 100;
            wd = wd - (wd / 100) * 100;
          }

          if (Notes_50 && wd >= 50) {
            console.log(Math.floor(wd / 50), "--> 50 notes");
            count = count + Math.floor(wd / 50);
            wd = wd - Math.floor(wd / 50) * 50;
          }

          if (Notes_20 && wd >= 20) {
            console.log(Math.floor(wd / 20), "--> 20 notes");
            count = count + Math.floor(wd / 20);
            wd = wd - Math.floor(wd / 20) * 20;
          }

          if (Notes_10 && wd >= 10) {
            console.log(Math.floor(wd / 10), " --> 10 notes");
            count = count + Math.floor(wd / 10);
            wd = wd - Math.floor(wd / 10) * 10;
          }

          // console.log(w);

          console.log("Notes count is : ", count);
          console.log(" ");
        } else {
          console.log("Insufficient balance can't withdraw");
          console.log(" ");
        }
      } else if (opt == 1) {
        var dep = parseInt(prompt("Enter the Deposit Amount : "));

        if (dep < 0 || dep == 0 || dep > 0) {
          amount += dep;

          d = console.log(dep, "deposited amount successfully.");

          console.log(d);

          ms.push([dep, "deposited amount successfully."]);
        }
      }
    }
  } else {
    console.log("Invalid...");
    console.log(" ");
  }
}

banking();
