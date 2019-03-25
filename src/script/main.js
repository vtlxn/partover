'use strict';

function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    navs.forEach(nav => nav.classList.toggle('navbar-items-show'));
}

document.querySelector('.menu-toggle').addEventListener('click', classToggle);