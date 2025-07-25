// Page Load Animation
window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, index) => {
    setTimeout(() => {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Highlight Section on Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("active-section");
    } else {
      sec.classList.remove("active-section");
    }
  });
});