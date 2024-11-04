const toggleMenu = () => {
  const menuBox = document.querySelector(".responsive-menu-box");
  menuBox.classList.toggle("showMenu");
};

document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
document.querySelector(".close").addEventListener("click", toggleMenu);
