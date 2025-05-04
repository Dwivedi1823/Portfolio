let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

// menuIcon.onClick = () => {

//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

menuIcon.addEventListener("click", function () {
  console.log("hi hello");
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
