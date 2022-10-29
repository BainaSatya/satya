var prompt = require("prompt-sync")();

console.log("Number of companies : ");

CEO_data = {

  "Microsoft": ["Satya Nadella"],
  "Google": ["Sundar Pichai"],
  "Facebook": ["Mark Zuckerberg"],
  "Amazon": ["Andy Jassy"],
  "Apple": ["Tim Cook"],
  "IBM": ["Arvind Krishna"],
  "Oracle": ["Safra A. Catz"],
  "Reliance": ["Mukesh Ambani"],
  "Intel": ["Pat Gelsinger"],
  "HDFC Bank": ["Sashidhar Jagdishan"],
  "Accenture": ["Julie Sweet"],
  "Twitter": ["Jack Dorsey"],
  "Netflix": ["Reed Hastings"],
  "Micromax": ["Rahul Sharma"],
  "HCL": ["Anant Gupta"],
  "Infosys": ["Salil Parekh"],
  "BCCI": ["Sourav Ganguly"],
  "HP": ["Enrique Lores"],
  "Instagram": ["Kevin Systrom"],
  "Nokia": ["Pekka Landmark"],
  "Sony": ["Jim Rayan"],
  "TCS": ["Natarajan Chandrasekaran"],
  "Dell": ["Michael Dell"],
  "Samsung": ["Ki Nam Kim"],
  "Wipro": ["Abidali Neemuchwala"],
  "Capgemini": ["Aiman Ezzat"],
  "Vivo": ["Shen Wei"],
  "Inkprog" : ["Rahul"],
  "Flipkart": ["Kalyan Krishna murthy"],
  "WhatsApp": ["Jan Koum"],
  "Paytm": ["Shekhar Sharma"],
  "Wikipedia": ["Jimmy Donal Wales"],
  "Yahoo": ["Marissa Mayer"],
  "Snapdeal": ["Kunal Bahal"],
  "Youtube": ["Sujan Wojcicki"],
  "Axis Bank": ["Amitabh Chaudhuri"],
  "Cognizant": ["Brian Humphries"],
};


let N = 0 

for(i in CEO_data){
     N = N + 1
     console.log(N,i)
}   