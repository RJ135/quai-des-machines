const burger = document.querySelector(".header__burger")
const main = document.querySelector("main")

const boxnav = document.querySelector(".header__boxnav")
const iconBurger = document.querySelector(".header__burgericon")

const navlink = document.querySelector(".header__navlink")

function toggleMenu(){
    boxnav.classList.toggle("header__active")
    if (boxnav.classList.contains("header__active")) {
        iconBurger.setAttribute("name", "close")
    } else {
        iconBurger.setAttribute("name", "menu")
    }
}

function closeMenu() {
    boxnav.classList.remove("header__active")
    iconBurger.setAttribute("name", "menu")
}

iconBurger.addEventListener("click" ,toggleMenu)

window.addEventListener('resize', closeMenu);
boxnav.addEventListener('click', closeMenu);

