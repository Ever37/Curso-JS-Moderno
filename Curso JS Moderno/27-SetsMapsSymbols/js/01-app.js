// Set te permite crear una lista sin valores repetidos.

const carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa');

carrito.delete('Disco #3');

console.log('carrito.has:', carrito.has('Camisa'));
console.log('carrito.size :', carrito.size);

carrito.forEach((prod, index, pertenece) => {
  console.log('index :', index);
  console.log('pertenece :', pertenece);
  console.log('prod :', prod);
})

carrito.clear();

console.log('carrito :', carrito);

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];
const noDuplicados = new Set(numeros);
console.log('noDuplicados :', noDuplicados);