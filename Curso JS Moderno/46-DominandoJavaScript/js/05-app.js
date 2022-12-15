// Explicit Binding

/*
function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// call: existe en todas las funciones javascript

// En call se pasa cada elemento individual
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// Apply puede tomar un arreglo completo
persona.apply(informacion, musicaFavorita);

// Igual que call, pero genera una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();
*/