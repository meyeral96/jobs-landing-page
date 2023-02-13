// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import * as bootstrap from "bootstrap"

let hamburgerMenu = document.querySelector("#hamburgerMenu");
let drawer = document.querySelector(".drawer");
let closeMenu = document.querySelector("#closeMenu");
let closedrawer = document.querySelector(".fa-times");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 100);
});

hamburgerMenu.addEventListener("click", () => {
  drawer.classList.toggle("select");
  hamburgerMenu.classList.toggle("fa-times");
});


