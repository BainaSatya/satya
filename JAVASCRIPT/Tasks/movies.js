var prompt = require("prompt-sync")();

console.log('1.Screen1 : Pushpa\n2.Screen2 : Bahubali\n3.Screen3 : KGF\n4.Screen4 : RRR\n5. Screen5 : God Father')
 
 
let screen = prompt("select your screen : ")


if (screen == "1"){
     console.log("Watch Pushpa Movie") 
     
     console.log("a.samosa", "b.thumsup")  
     var option = prompt("choose your snack : ")
        
   if (option == "a"){
     console.log("eat samosa") 
} 
else{
     console.log("drink thumsup")
    } 

}  

else if(screen == '2'){
     console.log('watch Bahubali Movie')
     console.log("a.osmania biscuits", "b.butter milk")
     var  option = prompt("choose your snack : ") 
     if (option == "a"){
          console.log("eat osmania biscuits")

     } 
     else{
          console.log("drink butter milk")
     }

}

else if(screen == '3'){
     console.log('watch KGF movie')
     console.log("1.lays packet", "2.lemon juice")
     var  option = prompt("choose your snack : ") 
     if (option == "a"){
          console.log("eat lays Packet")

     } 
     else{
          console.log("drink lemon Juice")
     }

}

else if(screen == '4'){
     console.log('watch RRR movie')
     console.log("1.sweet corn", "2. 7 UP")
     var  option = prompt("choose your snack : ") 
     if (option == "a"){
          console.log("eat sweet corn")

     } 
     else{
          console.log("drink 7 up")
     }

}

else if(screen == '5'){
     console.log('God Father tickets are houseful')
}

else{
     console.log('please select valid screen')
}


      
   
       
   
   
