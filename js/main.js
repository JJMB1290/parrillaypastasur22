
const navLinks = document.getElementById("navLinks");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll("#navLinks a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle(
      "active", link.getAttribute("href") === `#${entry.target.id}`
    ));
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("reservationForm")?.addEventListener("submit", event => {
  event.preventDefault();
  alert("Gracias. La reservación es un prototipo; conecta este formulario con WhatsApp, correo o tu sistema de reservas.");
});
