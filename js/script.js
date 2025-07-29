// ======================
// MOBILE MENU TOGGLE
// ======================
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
}

// Close menu when clicking outside or selecting menu item
document.addEventListener("click", function (e) {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  
  if (
    navMenu.style.display === "flex" &&
    !navMenu.contains(e.target) &&
    e.target !== hamburger
  ) {
    navMenu.style.display = "none";
  }
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.style.display = "none";
  });
});

// ======================
// DARK MODE TOGGLE
// ======================
const themeSwitch = document.getElementById("themeSwitch");
const themeLabel = document.getElementById("themeLabel");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  if (themeSwitch) themeSwitch.checked = true;
  if (themeLabel) themeLabel.textContent = "Dark";
}

if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      if (themeLabel) themeLabel.textContent = "Dark";
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
      if (themeLabel) themeLabel.textContent = "Light";
    }
  });
}

// ======================
// GO TO TOP BUTTON
// ======================
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

if (goTopBtn) {
  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ======================
// DROPDOWN FIX FOR MOBILE
// ======================
// Mobile devices par click par dropdown open hoga, hover ke bina
const dropdowns = document.querySelectorAll(".dropdown .dropbtn");
dropdowns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
