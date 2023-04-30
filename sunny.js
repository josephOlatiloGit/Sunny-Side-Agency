let btn = document.querySelector(".fa-bars");
const navLinks = document.getElementsByClassName("box")[0];

console.log(navLinks);
console.log(btn);

btn.onclick = function () {
  navLinks.classList.toggle("active");
};
