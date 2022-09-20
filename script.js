const headerBg = document.querySelector('.header-bg')
const nav = document.querySelector('nav')
const navUl = document.querySelector('ul')
const showBtn = document.querySelector('.fa-bars')
const hideBtn = document.querySelector('.fa-xmark')
const navBars = document.querySelector('.nav-bars-icon')

let lastScrollTop = 0;


const show_hide = () => {
    nav.classList.toggle('active-nav')
    navUl.classList.toggle('active-nav-ul')
    navBars.classList.toggle('active')
    showBtn.classList.toggle('hide')
    hideBtn.classList.toggle('hide')

}


const blurring = () => {
    let st = window.pageYOffset
    if (st > lastScrollTop) {
        headerBg.style = 'backdrop-filter: blur(6px);'
    } else {
        headerBg.style = 'backdrop-filter: blur(1px);'
    }

}



window.addEventListener('scroll', blurring)
navBars.addEventListener('click', show_hide)