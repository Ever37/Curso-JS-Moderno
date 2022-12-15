const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,2342,234,123]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesión', 'Desarrollador Web');

// Default
for (let ciudad of ciudades) {
  console.log('ciudad :', ciudad);
}

for (let orden of ordenes) {
  console.log('orden :', orden);
}

for (let dato of datos) {
  console.log('dato :', dato);
}

// Entries Iterator (key, value)
for (let entry of ciudades.entries()) {
  console.log(entry);
}

for (let entry of ordenes.entries()) {
  console.log(entry);
}

for (let entry of datos.entries()) {
  console.log(entry);
}

// Values Iterator (value)
for (let value of ciudades.values()) {
  console.log(value);
}

for (let value of ordenes.values()) {
  console.log(value);
}

for (let value of datos.values()) {
  console.log(value);
}

// Keys Iterator (key)
for (let keys of datos.keys()) {
  console.log(keys);
}

for (let keys of ordenes.keys()) {
  console.log(keys);
}

for (let keys of ciudades.keys()) {
  console.log(keys);
}



