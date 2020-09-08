const openBurgerMenu = document.querySelector('#burgerMenu')
const burger = document.querySelector('.burger_menu_nav')
const close = document.querySelector('#close')

openBurgerMenu.addEventListener('click', menuFunction)

function menuFunction() {
    burger.style = 'display: flex'
    close.style = 'display: flex'
}

close.addEventListener("click", closeMenu)

function closeMenu() {
    burger.style = 'display: none'
    close.style = 'display: none'
}