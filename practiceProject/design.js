

function show(){
	let navlinks = document.getElementById("navlinks");
    let burger = document.getElementById("burger");
	let navright = document.getElementById("nav-right");

    burger.addEventListener('click', () =>{
        navlinks.classList.toggle("nav-active");

        burger.classList.toggle("toggle");

    }) 
}

show();


let faq = document.querySelectorAll(".card");
faq.forEach((event) => {                                     
event.addEventListener("click", () => {
	if (event.classList.contains("active"))
    {
	event.classList.remove("active");
	}
    else {
	event.classList.add("active");
	}
});
});