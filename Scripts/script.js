/** Button click navbar show hide ***/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
  this.classList.toggle("click");
  nav.classList.toggle("open");
  });

var typed = new Typed(".input", {
  strings: [
    "Hello",
    "Hola",
    "నమస్కారం",
    "Bonjour",
    "Halo",
    "你好",
    "こんにちは",
    "Здравствуйте",
    "مرحبا ",
    "नमस्ते ",
    "Olá",
    "Ciao",
    "안녕하세요",
    "Cześć",
    "Γειά σου",
    ],
    typedSpeed: 10,
    backSpeed: 90,
    loop: true,
  });

  /*-------------nav-bar----------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}