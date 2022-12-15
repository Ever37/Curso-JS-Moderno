const producto = {
  idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');
console.log('weakmap :', weakmap.has(producto));
console.log('weakmap :', weakmap.get(producto));
console.log('weakmap :', weakmap.delete(producto));

// no funciona el size
// no se puede iterar con un forEach
// solo aceptan objetos