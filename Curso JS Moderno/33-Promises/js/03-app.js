/*
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if(descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
})

aplicarDescuento
    .then( resultado => {
        descuento(resultado);
    })
    .catch(error => {
        console.log(error);
    })

console.log(aplicarDescuento);

// Hay 3 valores posibles...
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
    console.log(mensaje);
}
*/