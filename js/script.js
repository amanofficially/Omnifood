var yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

var btnNav = document.querySelector(".btn-mobile-nav");
var header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

var allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      var section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.remove("nav-open");
    }
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 720) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});
