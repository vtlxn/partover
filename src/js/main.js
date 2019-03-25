'use strict';

function classToggleNav() {
  var navs = document.querySelectorAll('.navbar-items');
  navs.forEach(function (nav) {
    return nav.classList.toggle('navbar-items-show');
  });
}

document.querySelector('.menu-toggle').addEventListener('click', classToggleNav);

function classToggleCurrency() {
  var navs = document.querySelectorAll('.currency-dropdown');
  navs.forEach(function (nav) {
    return nav.classList.toggle('currency-dropdown-show');
  });
  var navs2 = document.querySelectorAll('.currency-arrow-dropdown');
  navs2.forEach(function (nav) {
    return nav.classList.toggle('currency-arrow-dropdown-show');
  });
}

document.querySelector('.currency').addEventListener('click', classToggleCurrency);