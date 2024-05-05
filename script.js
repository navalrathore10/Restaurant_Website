const menuBar = document.querySelector('#menubar');
const menu = document.querySelector('#menu');
const menuOverlay = document.querySelector('#menu_overlay');

menuBar.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    menuBar.classList.toggle('fa-xmark');
    menuBar.classList.toggle('fa-bars');
    menuOverlay.classList.toggle('menu_overlay_active')
});