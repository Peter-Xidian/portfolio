// ===== NAV TOGGLE =====
const navOpen = document.querySelector(".nav-open");
const header = document.querySelector(".header");

navOpen.addEventListener("click", () => {
  header.classList.toggle("active");
});

// ===== SCROLL BEHAVIOR =====
let lastScrollY = window.scrollY;
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const heroHeight = heroSection.offsetHeight;

  // If inside hero → always show header
  if (currentScrollY <= heroHeight) {
    header.classList.remove("hide");
    return;
  }

  // Scrolling DOWN → hide header
  if (currentScrollY > lastScrollY) {
    header.classList.add("hide");
  }
  // Scrolling UP → show header
  else {
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});
