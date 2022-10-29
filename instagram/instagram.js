// list all resourses

// fetch("https://jsonplaceholder.typicode.com/photos")
// .then((response) => response.json())
// .then((json) => console.log(json));

// // getting a resourse

// fetch("https://jsonplaceholder.typicode.com/photos/1")
// .then((response) => response.json())
// .then((json) => console.log(json));

// // --------------  creating a resourse  -----------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/photos",{
//         method : "POST",
// body : JSON.stringify({

//           "id": 1,
//           "title": "Satya Profile",
//           "url": "./assets/Satya.jpg"
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }

// })

//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // ----------------- updating resourse  ---------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/photos/1",{
//         method : "PUT",
// body : JSON.stringify({

//     "id": 1,
//     "title": "Satya Profile",
//     "url": "./assets/Satya.jpg"
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }

// })

//     .then((response) => response.json())
//     .then((json) => console.log(json));

// //  --------------------- Patching resourse  ------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/photos/1",{
//         method : "PATCH",
// body : JSON.stringify({

//     "url": "./assets/Satya.jpg",
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }

// })

//     .then((response) => response.json())
//     .then((json) => console.log(json));

// //  ------------------------------------------------------------

// let grid = document.getElementById("grid");
// grid.innerHTML=`<img src='${""}'>`;

// console.log(grid)

// fetch("https://jsonplaceholder.typicode.com/photos")
// .then((response) => response.json())
// .then((json) => console.log(json));

// --------------------------------------------------------------

  // let arr = [`${url}/1`,`${url}/2`,`${url}/3`,`${url}/4`,`${url}/5`,`${url}/6`]
    // console.log(arr);

 // ------------------------------------------------------------------------------

let url = 'https://jsonplaceholder.typicode.com/photos';
fetch(url)
.then((response)=>{

   return response.json();

})

.then((data)=>{
  
   let input=11;

   for(let item in data){
    let grid = document.querySelector('.grid');
    var box = document.createElement('div');
    box.classList.add('box');
    grid.appendChild(box);

    var img = document.createElement('img');
    img.classList.add('image');
    img.src = data[item].url;
    if(item == input){
      break;
    }
    box.appendChild(img);

   }

})


// ----------------------------------------------------------------

function getPhotos() {

    let photo = document.querySelector("#grid");

    let Name = [
      "google",
      "facebook",
      "instagram",
      "gmail",
      "twitter",
      "whatsapp",
      "youtube",
      "linkedin",
      "telegram",
    ];
    let type = ["png", "jpg"];

    for (a = 0; a <= Name.length - 1; a++) {
      console.log(`./assets/${Name[a]}.${type[0]}`);
    }

    let url = "https://via.placeholder.com";
    let color = [
      "92c952",
      "771796",
      "24f355",
      "d32776",
      "f66b97",
      "56a8c2",
      "b0f7cc",
      "54176f",
      "51aa97",
    ];
    let boldColor;
    for (i = 0; i < 9; i++) {
      for (x = 0; x < 9; x++) {
        for (s = 0; s < 9; s++) {
          for (boldColor = 0; boldColor <= 599; boldColor++) {
            if (boldColor % 100 == 0) {
            }
            for (k = 0; k < 9; k++) {}
          }
        }
      }
      console.log(
        `<img src="${url}/${boldColor}/${color[i]}" alt="photo" class="image">`
      );





    }

    
    

}
getPhotos();




let body = document.getElementById("body");

body.addEventListener("click", change);

function change() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    var result = Math.floor(Math.random() * 16);
    color = color + letters[result];
   
  }
  console.log(color);
  document.body.style.backgroundColor = color;

}
change()

// ------------------------------------------------------

const linkNames = document.querySelector("#linkNames");
const burger = document.querySelector("#burger");
const navbar = document.querySelector("#navbar");
const settings = document.querySelector("#settings");

burger.addEventListener("click", () => {
  linkNames.classList.toggle("nav-active");

  burger.classList.toggle("toggle");


});


// ------------------------------------------------------------------

// loadJSON("https://jsonplaceholder.typicode.com/photos", getData);

// function getData(Data) {
// console.log(Data[2]);
// }

// image 1
// let img1 = document.createElement('img');
// img1.src = './assets/Satya.jpg';
// document.getElementById('grid').appendChild(img1);

// let hed = document.querySelector('.heading');
// console.log(hed.innerHTML = "Work From Home");

// let hed1 = document.createElement('h1');
// console.log(hed1.innerHTML = "hard work never fails");
// console.log(hed.appendChild(hed1));

// -------------------------------------------------------------------------------

// creating a resourse   (first image)

// fetch("https://jsonplaceholder.typicode.com/photos?url=./assets/Satya.jpg",{
// method : "POST"

// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// updating resourse      (first image)

// fetch("https://jsonplaceholder.typicode.com/photos/1",{
//         method : "POST",
// body : JSON.stringify({

//         "url": "./assets/Satya.jpg",
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }

// })

//     .then((response) => response.json())
//     .then((json) => console.log(json));

//   img =  fetch("https://jsonplaceholder.typicode.com/photos/1/?url='./assets/Satya.jpg'",{
//         method : "PUT",
// body : JSON.stringify({

//         "url": "./assets/Satya.jpg",
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }

// })

//     .then((response) => response.json())
//     .then((json) => console.log(json));

// .then((data) => {
//     for(let item in data){
//        data[item].url

//     }

// })

// .then((json) => console.log(json));

// fetch(img, {
//     method : "PUT",
// body : JSON.stringify({

//         "url": "./assets/Satya.jpg",
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }

// })

// .then((response)=>{
//     return response.json();
// })

// .then((data) => {
//     console.log(data)
// })

// console.log(img)

// ------------------------- first image  ------------------------------------------

//   ------------------------------------------------------------------

// // creating a resourse   (second image)

// fetch("https://jsonplaceholder.typicode.com/photos",{
// method : "POST",
// body : JSON.stringify({
//           "name": "satya",
//           "id": 24,
//           "title": "learning how to learn is life's most important skill",
//           "url": "./assets/html.png",
//         }),
// headers: {
//     "content-type" : "application/json; charset=UTF-8",
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// // updating resourse      (second image)

// let img2 = "https://jsonplaceholder.typicode.com/photos/1";
// fetch(img2)

// .then((response) => {
//     return response.json()
// })

// .then((data) => {
//     for(let item in data){
//        data[item].url

//     }
// })

// fetch(img2, {
//     method : "PUT",
// body : JSON.stringify({
//         "name": "satya",
//         "id": 24,
//         "title": "learning how to learn is life's most important skill",
//         "url": "./assets/html.png",
// }),
// headers: {
//          "content-type" : "application/json; charset=UTF-8",
// }
// })

// .then((response)=>{
//     return response.json();
// })

// .then((data) => {
//     console.log(data)
// })

// // ------------------------- second image  ------------------------------------------

// getImage2();
//   function getImage2()
//   {
//     var grid2 = document.getElementById("grid");
//     grid2.innerHTML="<img src='./assets/html.png'>";

//   }

// --------------------------------------------------------------------------

// document.getElementById("grid").innerHTML = `<img src="${output.url}">`;

// ------------------------------------------------------------

// deleting a resourse

// fetch("https://jsonplaceholder.typicode.com/photos/1",{
// method : "DELETE",
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// ------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9,10];

// // console.log(arr)
// let input = 10;

// if(input >= 1){
//     for(let i=0 ; i<input; i++){
//         console.log(arr[i]);
//     }
// }else{
//     for(let i=0 ; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }