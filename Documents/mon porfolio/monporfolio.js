
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});


sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.6s ease";
});

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("✅ Message envoyé avec succès !");

  form.reset();
});


const button = document.querySelector("button");

button.addEventListener("mouseover", () => {
  button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseout", () => {
  button.style.transform = "scale(1)";
});
