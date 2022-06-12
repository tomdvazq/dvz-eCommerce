const navMenu = document.getElementById('nav-mobile'),
    openMenu = document.getElementById('toggle'),
    closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show_menu')
}
)

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})