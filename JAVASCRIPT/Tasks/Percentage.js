

const prompt = require("prompt-sync")();


while(true){

     let Percentage = parseInt(prompt("Enter your Percentage (%) : "));

     if (Percentage > 40 && Percentage <=50){
          console.log("Buy a Pen")
       }
       
       else if (Percentage > 50 && Percentage <=60){
           console.log("Buy a Book")
       }
       
       else if (Percentage > 60 && Percentage <=70){
           console.log("Buy a Bag")
       }
       
       else if (Percentage > 70 && Percentage <=80){
           console.log("Buy a Mobile")
       }
       
       else if (Percentage > 80 && Percentage <=90){
           console.log("Buy a Laptop")
       }
       
       else if (Percentage > 90 && Percentage <=100){
           console.log("Buy a Iphone")
       }
       
       else{
           console.log("Not buy anything.")
           break;
       }
}

