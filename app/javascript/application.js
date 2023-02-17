// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import * as bootstrap from "bootstrap";

let hamburgerMenu = document.querySelector("#hamburgerMenu");
let closeHamburgerMenu = document.querySelector("#closeHamBurger");
let drawer = document.querySelector(".drawer");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 100);
});

hamburgerMenu.addEventListener("click", () => {
  document.querySelector("#hamburgerMenu").style = "display: none";
  document.querySelector("#closeHamBurger").style = "display: block";
  drawer.classList.toggle("select");
});

closeHamburgerMenu.addEventListener("click", () => {
  document.querySelector("#hamburgerMenu").style = "display: block";
  document.querySelector("#closeHamBurger").style = "display: none";
  drawer.classList.toggle("select");
});
