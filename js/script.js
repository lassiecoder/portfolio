// ACTIVE SECTION HIGHLIGHTER USING SCROLLSPY
window.onload = function() {
  scrollSpy("#navMenu", {
    sectionClass: ".scrollspy",
    menuActiveTarget: ".navItems",
    offset: 180
  });
};

$(".imgGallary").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 1000
});

// MOBILE VIEW NAVBAR
let hiddenmenu = document.getElementById("showHide");
// console.log(hiddenmenu);

let toggleopen = document.getElementById("toggleOpen");

let toggleclose = document.getElementById("toggleClose");

let navitems = document.getElementById("navItems");

let blurSection = document.querySelectorAll(".scrollspy");

let logoheading = document.getElementById("logoHeading");
console.log(logoheading);

toggleopen.onclick = function() {
  hiddenmenu.style.display = "block";
  logoheading.style.boxShadow = "none";
};

// toggleclose.onclick = function() {
//   hiddenmenu.style.display = "none";
// };

navitems.onclick = function() {
  intro.style.filter = "blur(0px)";
};

// ONCLICK TOGGLE AUTO HIDDEN AND BLUR BACKGROUND
for (let i = 0; i < blurSection.length; i++) {
  console.log("hello");
  toggleopen.addEventListener("click", function() {
    blurSection[i].style.filter = "blur(3px)";
  });
  hiddenmenu.addEventListener("click", function() {
    blurSection[i].style.filter = "blur(0px)";
    hiddenmenu.style.display = "none";
    logoheading.style.boxShadow = "0px 2px 11px -2px rgba(0, 0, 0, 0.75)";
  });
}

// function scrollWin() {
//   window.scrollBy(0, -55);
// }
