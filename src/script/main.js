'use strict';

function classToggleNav() {
    const navs = document.querySelectorAll('.navbar-items')
    navs.forEach(nav => nav.classList.toggle('navbar-items-show'));
}

document.querySelector('.menu-toggle').addEventListener('click', classToggleNav);


function classToggleCurrency() {
    const navs = document.querySelectorAll('.currency-dropdown')
    navs.forEach(nav => nav.classList.toggle('currency-dropdown-show'));
    
    const navs2 = document.querySelectorAll('.currency-arrow-dropdown')
    navs2.forEach(nav => nav.classList.toggle('currency-arrow-dropdown-show'));
}

document.querySelector('.currency').addEventListener('click', classToggleCurrency);
