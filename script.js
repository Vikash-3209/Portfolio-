// Highlights the menu link of the section currently on screen
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "home";
  const offset = window.scrollY + 120;

  sections.forEach(function (section) {
    if (offset >= section.offsetTop) {
      current = section.id;
    }
  });

  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();
