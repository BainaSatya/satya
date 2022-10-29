
const person = { 
     name: 'John',
     age: 20,
     hobbies: ['reading', 'games', 'coding'],
     greeting: function() {
         console.log('Hello everyone.');
     },
     score: {
         maths: 90,
         science: 80
     }
 };
 
 console.log(typeof person); // object
 
 // accessing the object value
 console.log(person.name);
 console.log(person.hobbies[0]);
 person.greeting();
 console.log(person.score.maths);