// 

window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    var scrollY = window.scrollY;

    if(scrollY >= 150){
        navbar.classList.add("fixed");
        navbar.style.transition = "0.5s ease-out";
    } else{
        navbar.classList.remove("fixed");
        navbar.style.transition = "0.5s ease-out";
    }
});


// 
$(document).ready(function () {
    $("#toggleIcon").click(function () {
        $("ul").toggleClass("showNavbar");
    });
});


// Active while scrolling
// let sections = document.querySelectorAll(".section");
// let navLink = document.querySelectorAll("nav ul li a");

// window.onscroll = () => {
//     sections.forEach(box = () => {
//         let top = window.scrollY;
//         let offset = box.offsetTop;
//         let height = box.offsetHeight;
//         let id = box.getAttribute("id");

//         if(top >= offset && top < offset + height){
//             navLink.forEach(links = () => {
//                 links.classList.remove("active");
//                 document.querySelector('nav ul li a[href*=' + id + ']').classList.add("active");
//             });
//         }
//     });
// };

// 