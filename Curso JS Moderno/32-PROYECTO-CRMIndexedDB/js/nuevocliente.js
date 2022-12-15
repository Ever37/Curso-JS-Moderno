(function () {
  let DB;
  const formulario = document.querySelector('#formulario');

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();
    formulario.addEventListener('submit', validarCliente);
  });

  function conectarDB() {
    // ABRIR CONEXIÓN EN LA BD:
    let abrirConexion = window.indexedDB.open('crm', 1);

    // si hay un error, lanzarlo
    abrirConexion.onerror = function () {
      console.error('Hubo un error');
    };

    // si todo esta bien, asignar a database el resultado
    abrirConexion.onsuccess = function () {
      // guardamos el resultado
      DB = abrirConexion.result;
    };
  }

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if (nombre === '' || email === '' || telefono === '' || empresa === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error');
      return;
    }

    // Añadir a la BD...
    // crear un nuevo objeto con toda la info
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
      id: Date.now(), // Generar un ID único
    };

    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    // NUEVO: 
    const transaction = DB.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');
    objectStore.add(cliente);

    transaction.onerror = () => {
      console.error('Hubo un error!');
      imprimirAlerta('Hubo un Error', 'error');
    };

    transaction.oncomplete = () => {
      console.log('Cliente Agregado');

      imprimirAlerta('Se agregó correctamente');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    };
  }

})();