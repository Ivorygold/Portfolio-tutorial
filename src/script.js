const hanburgerButton = document.getElementById("hanburger");
const navListButton = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hanburgerButton.addEventListener("click", toggleButton);
