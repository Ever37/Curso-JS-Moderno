// Functional JS

// Crear tu código utilizando funciones.
// Las funciones deben tomar una entrada y tener una salida de datos.
// No se permite la modificación de los datos.
// Inmutabilidad - Los datos no deben modificarse (utilizan const casi siempre)
// Separar Funciones de datos
// First-class functions

// Inmutabilidad
// Un dato no puede cambiarse, no puedes tener
// let cliente = 'juan'
// cliente = 'pedro'

// Se utilizan mucho funciones que retornan un nuevo dato o Array Methods,
// de esa forma tendremos funciones que entregan un resultado nuevo
// pero nunca modifican los datos.

// First-class functions:
// Es poder crear funciones que parezcan cualquier variable como lo es function expression

// const suma = function(a, b) {
//     return a + b;
// }

// const resultado = suma;

/*
const suma = function(a, b) {
    return a + b;
}

// First-class function
const resultado = suma;

console.log(resultado(10, 20));
*/