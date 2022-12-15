// WeakSet -> Es como un SET pero solo almacena objetos!

const weakset = new WeakSet();

const cliente = {
  nombre: 'Juan',
};

const nombre = 20;

weakset.add(cliente);
// weakset.add(nombre);

// console.log(weakset.has(cliente));
weakset.delete(cliente);

console.log('weakset.size :', weakset.size);

console.log('weakset :', weakset);