/* Scroll Navbar */
window.addEventListener("scroll", function() {
  var sousNav = document.querySelector(".sous_nav");
  var craftitium = document.querySelector(".craftitium");
  var scrollPosition = window.scrollY;
  var windowWidth = window.innerWidth;

  if (windowWidth > 899) {
      if (scrollPosition >= 950) {
          sousNav.style.display = "none";
          craftitium.style.display = "none"
      } else {
          sousNav.style.display = "block";
          craftitium.style.display = "block"
      }
  } else if (windowWidth <= 599) {
      if (scrollPosition >= 180) {
          sousNav.style.display = "none";
          craftitium.style.display = "none"
      } else {
          sousNav.style.display = "block";
          craftitium.style.display = "block"
      }
  } else {
      sousNav.style.display = "block";
      if (scrollPosition >= 330) {
          sousNav.style.display = "none";
      }
      craftitium.style.display = "block";
      if (scrollPosition >= 330) {
        craftitium.style.display = "none";
    }
  }
});
