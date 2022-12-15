import nuevaFuncion, { ahorro, Client, mostrarInformacion, tieneSaldo } from './cliente';
// Importar empresa
import { Empresa } from './empresa.js';

nuevaFuncion(); // Los export defaults se importan con un alias, así que no importa el nombre que se le dé.

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const client = new Client(nombreCliente, ahorro);
console.log(client.mostrarInformacion());

const empresa = new Empresa('Código Con Juan', 100, 'Aprendizaje en Línea');
console.log(empresa.mostrarInformacion());