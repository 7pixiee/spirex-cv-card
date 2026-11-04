const sections = document.querySelectorAll(
  ".side-section, .main-section"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});

const profileName = document.querySelector(".profile h1");

profileName.style.cursor = "pointer";

profileName.addEventListener("click", () => {
  profileName.textContent = "Hey, I'm Sumayya!";

  setTimeout(() => {
    profileName.textContent = "Sumayya Belal";
  }, 2000);
});

const skills = document.querySelectorAll(".skills-grid span");

skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("selected");
  });
});