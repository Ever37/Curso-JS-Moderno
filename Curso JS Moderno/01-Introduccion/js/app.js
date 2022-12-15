console.time('Se ejecuta el código');
/*
    Pregunta al usuario su nombre
*/
const nombre = prompt('Cual es tu nombre?');

// Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;

// Asignar el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';

console.timeEnd('Se ejecuta el código');