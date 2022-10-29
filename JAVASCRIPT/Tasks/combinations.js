
var prompt = require("prompt-sync")();

var a = parseInt(prompt("Enter the first number : "));

var b = parseInt(prompt("Enter the second number : "));

var c = parseInt(prompt("Enter the third number : "));

var d = [];

d.push(a);
d.push(b);
d.push(c);
d.push(d);

for(let i=0; i<3; i++){
     for(let j=0; j<3; j++){
          for(let k=0; k<3; k++){
               if((i !== k) && (j !== k) && (k !== i)){
                    console.log(d[i],d[j],d[k]);
               }
               
          }
     }
}          