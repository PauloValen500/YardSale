const menuArrow = document.querySelector('.menu-arrow');
const desktopMenu = document.querySelector('.desktop-menu');

menuArrow.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}