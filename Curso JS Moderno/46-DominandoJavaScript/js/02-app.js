// Hoisting
// Diferencia entre function expression y function declaration

/*
obtenerCliente('Juan'); // Puedo llamar a la función y luego declararla.

function obtenerCliente(nombre) { // SI FUNCIONA
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2('Pablo'); // No se puede llamar sin antes ser definida. NO FUNCIONA.

const obtenerCliente2 = (nombre) => {
    console.log(`El nombre del cliente es ${nombre}`);
}
*/
