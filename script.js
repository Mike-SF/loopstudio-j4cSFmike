const menuBtn = document.querySelector('.nav-btn')
const navWrapper = document.querySelector('.nav-wrapper')
const navLogo = document.querySelector('.nav__logo')
const burger = document.querySelector('.nav-btn__burger')
const navMenu = document.querySelector('.nav__menu')

menuBtn.addEventListener('click', toggleMenu)

let showMenu = false

function toggleMenu() {
  if (!showMenu) {
    navWrapper.classList.add('open')
    navLogo.classList.add('open')
    burger.classList.add('open')
    navMenu.classList.add('open')
    showMenu = true
  } else {
    navWrapper.classList.remove('open')
    navLogo.classList.remove('open')
    burger.classList.remove('open')
    navMenu.classList.remove('open')
    showMenu = false
  }
}
