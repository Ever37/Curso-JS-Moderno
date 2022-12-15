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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades estáticas - No requiren una instancia.
    static bienvenida() { // sobreescribir un método
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Código con juan', 500, 234234, 'Aprendizaje en Línea');
console.log('empresa :', empresa);
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
