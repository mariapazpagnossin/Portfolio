'use strict';
//MENU MOVIL
var menu = document.querySelector('.header__menumovil');
var icon = document.querySelector('.header__fas');
var nav = document.querySelector('.header__nav');
menu.addEventListener('click', function () {
    nav.classList.toggle('ver');
    icon.classList.remove('fa-bars');
    icon.classList.toggle('fa-times');
    icon.classList.add('fa-bars');
});
//ACORDEON
var fila = document.querySelectorAll('.main__fila');
fila.forEach(function (cadaFila, i) {
    fila[i].addEventListener('click', function () {
        fila.forEach(function (cadaFila, i) {
            fila[i].classList.remove('ver');
        });
        fila[i].classList.add('ver');
    });
});
// POP UP CONTACTO
var contacto = document.querySelector('.footer__contacto');
var popup = document.querySelector('.footer__popup');
var cerrar = document.querySelector('.footer__close');
contacto.addEventListener('click', function () {
    popup.classList.add('ver');
});
cerrar.addEventListener('click', function () {
    popup.classList.remove('ver');
});
