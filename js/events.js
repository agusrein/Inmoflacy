let nav = document.querySelector('.div__container--list');
let btnAbrir = document.querySelector('.btn__open');
let btnCerrar = document.querySelector('.btn__close');

btnAbrir.addEventListener('click', () => {
   nav.classList.add('nav__visible')
})
btnCerrar.addEventListener('click', () => {
   nav.classList.remove('nav__visible')
}) // Evento menu responsive


let listElements = document.querySelectorAll('.list__button--click');
listElements.forEach(listElement => {
   listElement.addEventListener('click', () => {
      listElement.classList.toggle('arrow')
      listElement.nextElementSibling.classList.toggle('menu-show')
   })
}) //Evento aplicado a menu desplegable, página Indices.

let btnApply = document.querySelector('.button__apply')
if (btnApply) {
   btnApply.addEventListener('click', () => {
      actualizacion.pedirInformacion()
   });
} //Evento que inicializa el programa

let btnPopUpClose = document.querySelector('.btn__popUp-close')
let popUp = document.querySelector('.div__container--popUp')
if (btnPopUpClose && popUp) {
   btnPopUpClose.addEventListener('click', () => {
      popUp.classList.toggle('hidden')
   })// Card que muestra el importe actualizado
}

