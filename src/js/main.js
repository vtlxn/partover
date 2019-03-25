'use strict';

function classToggle() {
  var navs = document.querySelectorAll('.navbar-items');
  navs.forEach(function (nav) {
    return nav.classList.toggle('navbar-items-show');
  });
}

document.querySelector('.menu-toggle').addEventListener('click', classToggle);