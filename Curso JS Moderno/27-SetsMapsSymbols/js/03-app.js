// Maps -> tienen mejor performance que un objeto
// Son listas de llave y valor

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

console.log(cliente);

console.log('cliente.size :', cliente.size);

cliente.get('nombre');
console.log('cliente.get :', cliente.get('nombre'));
cliente.has('nombre2');
console.log('cliente.has :', cliente.has('nombre2'));

cliente.clear();

const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);
paciente.set('dr', 'Dr Asignado');
console.log('paciente :', paciente);

paciente.forEach((pac, index) => {
  console.log('index :', index);
  console.log('pac :', pac);
})