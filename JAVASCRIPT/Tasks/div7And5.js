
const prompt = require('prompt-sync')();

let lower = parseInt(prompt("Enter the lower range : ")) 

let upper = parseInt(prompt("Enter the higher range : ")) 


for(let i=lower; i<upper+1; i++){
    
     if ((i % 7 == 0) && (i % 5 == 0)){
          console.log(i)
     }        

}    