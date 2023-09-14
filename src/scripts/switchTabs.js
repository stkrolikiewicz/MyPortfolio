const portfolioButton = document.getElementById("portfolio-tab");
const portfolioSection = document.getElementById("portfolio");
const skillsButton = document.getElementById("skills-tab");
const skillsSection = document.getElementById("skills");

portfolioButton.addEventListener("click", () => {
  portfolioSection.style.display = "grid";
  skillsSection.style.display = "none";
  portfolioButton.setAttribute("disabled", "true");
  skillsButton.removeAttribute("disabled");
});

skillsButton.addEventListener("click", () => {
  portfolioSection.style.display = "none";
  skillsSection.style.display = "grid";
  portfolioButton.removeAttribute("disabled");
  skillsButton.setAttribute("disabled", "true");
});
