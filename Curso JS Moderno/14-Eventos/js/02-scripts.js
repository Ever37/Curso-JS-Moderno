const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la nav');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log('Entrando en la nav');
    nav.style.backgroundColor = 'white';
})

// mousedown - similar al click
// click
// dblclick - doble click
// mouseup - cuando sueltas el mouse