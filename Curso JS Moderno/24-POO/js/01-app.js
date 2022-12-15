// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades estáticas - No requiren una instancia.
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente('Juan', 400);
console.log('juan :', juan);
console.log('juan :', juan.mostrarInformacion());
console.log(Cliente.bienvenida())

// Class expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log('juan2 :', juan2);
console.log('juan2 :', juan2.mostrarInformacion());