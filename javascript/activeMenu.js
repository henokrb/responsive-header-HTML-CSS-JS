const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((Link) => Link.classList.remove("active"));
    link.classList.add("active");
  });
});

// Close the responsive menu box if a click occurs outside of it
document.addEventListener("click", (event) => {
  const menuBox = document.querySelector(".responsive-menu-box");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  // Check if the click is outside the menu box and not on the hamburger icon
  const isClickOutside =
    !menuBox.contains(event.target) && !hamburgerIcon.contains(event.target);

  // If the menu is open and the click is outside, close the menu
  if (isClickOutside && menuBox.classList.contains("showMenu")) {
    menuBox.classList.remove("showMenu");
  }
});