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

let hiddenmenu = document.getElementById("showHide");
console.log(hiddenmenu);

let toggleopen = document.getElementById("toggleOpen");

let toggleclose = document.getElementById("toggleClose");

toggleopen.onclick = function() {
  hiddenmenu.style.display = "block";
};
toggleclose.onclick = function() {
  hiddenmenu.style.display = "none";
};