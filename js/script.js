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

toggleopen.onclick = function() {
  hiddenmenu.style.display = "block";
};

toggleclose.onclick = function() {
  hiddenmenu.style.display = "none";
};

navitems.onclick = function() {
  intro.style.filter = "blur(0px)";
};

// function scrollWin() {
//   window.scrollBy(0, -55);
// }
