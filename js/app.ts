'use strict';

//MENU MOVIL

const menu  = (document.querySelector('.header__menumovil') as HTMLElement);
const icon  = (document.querySelector('.header__fas') as HTMLElement);
const nav   = (document.querySelector('.header__nav') as HTMLElement);

menu.addEventListener('click', () : void => {
    nav.classList.toggle('ver')
    icon.classList.remove('fa-bars')
    icon.classList.toggle('fa-times')
    icon.classList.add('fa-bars')
});




//ACORDEON

var fila = document.querySelectorAll<HTMLElement>('.main__fila');

fila.forEach( (cadaFila, i) : void => {

  fila[i].addEventListener('click', () : void => {

    fila.forEach( (cadaFila, i) : void => {
      fila[i].classList.remove('ver')
    })

    fila[i].classList.add('ver')
    })

})


// POP UP CONTACTO

var contacto = (document.querySelector('.footer__contacto') as HTMLElement);
var popup    = (document.querySelector('.footer__popup') as HTMLElement);
var cerrar    = (document.querySelector('.footer__close') as HTMLElement);

contacto.addEventListener('click', () : any => {
    popup.classList.add('ver')
})

cerrar.addEventListener('click', () : any => {
    popup.classList.remove('ver')
})
