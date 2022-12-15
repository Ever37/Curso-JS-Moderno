// Traversing the DOM
// https://zellwk.com/blog/dom-traversals/

const navegacion = document.querySelector('nav.navegacion');
// console.log(navegacion);
// console.log(navegacion.childNodes); // Los elementos son los espacios en blanco - Los espacios en blanco son considerados elementos.

// console.log(navegacion.children); // Lista elementos reales

console.log(navegacion.children[0]);

const card = document.querySelector('.card');
// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

// console.log(card.children[1].children[1].textContent);

// Traversing the Hijo al padre
// console.log(card.parentNode);
// console.log(card.parentElement);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);