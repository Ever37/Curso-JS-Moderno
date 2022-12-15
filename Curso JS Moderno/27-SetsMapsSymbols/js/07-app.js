// Generador: Es una función que retorna un iterador

function *crearGenerador() {
  yield 1;
  yield 'Juan';
  yield 3 + 3;
  yield true;
}

const iterador = crearGenerador();
// console.log('iterador :', iterador);
// console.log('iterador :', iterador.next().value);
// console.log('iterador :', iterador.next().done);
// console.log('iterador :', iterador.next());
// console.log('iterador :', iterador.next());
// console.log('iterador :', iterador.next());
// console.log('iterador :', iterador.next());
// console.log('iterador :', iterador);

// Generador para carrito de compra

function *generadorCarrito( carrito ) {
  for(let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ['p1', 'p2', 'p3'];

const iterador2 = generadorCarrito(carrito);
console.log('iterador2 :', iterador2);