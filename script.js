const menuBtn  = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav      = document.getElementById("nav");
const overlay  = document.getElementById("overlay");
const navItems = document.querySelectorAll(".nav-item.has-dropdown");

/* ── Mobile menu ── */
function openMenu() {
  nav.classList.add("active");
  overlay.classList.add("active");
  menuBtn.style.display = "none";
  closeBtn.classList.remove("hidden");
}

function closeMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.style.display = "";
  closeBtn.classList.add("hidden");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

/* ── Dropdowns (click only, not hover) ── */
navItems.forEach(item => {
  item.querySelector(".nav-link").addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = item.classList.contains("active");
    navItems.forEach(i => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

/* Close dropdowns on outside click */
document.addEventListener("click", () => {
  navItems.forEach(i => i.classList.remove("active"));
});
