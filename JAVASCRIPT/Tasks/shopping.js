
const prompt = require("prompt-sync")();

function online_shopping(){
     
     const online = "Welcome to Online Shopping"  
     console.log(online)     
     
     
     console.log("1.Flipkart\t2.Amazon")     
     
     const shopping = prompt("choose your application : ") 


     if (shopping == "Flipkart" || shopping == "Amazon"){
          console.log("Welcome to",shopping) 
          console.log("please Login") 
     } 
     
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
     let UserID = prompt("Enter your UserID : ");
     console.log(" ");
     let password = prompt("Enter Your Password : ");
     console.log(" ");
     if (
       (UserID == id1[0] && password == id1[1]) ||
       (UserID == id2[0] && password == id2[1]) ||
       (UserID == id3[0] && password == id3[1])
     ) {
     console.log('continue your online shopping.')
       console.log(" ");
       let search = prompt("search your product (laptop) : ")
       if (search == "Apple"){
          console.log(search) 
          specifications = 'Apple Specificifications'
          console.log(specifications) 

       }      
       else if(search == "DELL"){
          console.log(search) 
          specifications = 'DELL Specificifications'
          console.log(specifications)  
       }    
       else if(search == "ASUS"){
          console.log(search) 
          specifications = 'ASUS Specificifications'
          console.log(specifications)  
       } 
       else if(search == "HP"){
          console.log(search) 
          specifications = 'HP Specificifications'
          console.log(specifications) 
       } 
       else if(search == "Lenevo"){
          console.log(search) 
          specifications = 'Lenevo Specificifications'
          console.log(specifications)  
       } 
       else{
          console.log('invalid Product')
       }
       
     }
     else{
          console.log('invalid')
     }


}

online_shopping()