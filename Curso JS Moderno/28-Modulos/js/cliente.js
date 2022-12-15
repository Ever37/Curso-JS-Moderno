// MODULOS EN ES6

// Mantiene las variables localmente
// (function() {
//     console.log('Desde un IIFE');
//     window.nombreCliente = 'Juan';
// })();

export const nombreCliente = 'Juan';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('El cliente no tiene saldo');
    }
}

export class Client{
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el export default');
}



