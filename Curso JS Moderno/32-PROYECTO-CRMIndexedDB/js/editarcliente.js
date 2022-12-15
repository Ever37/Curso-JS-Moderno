(function () {

  let DB;
  let idCliente;

  const formulario = document.querySelector('#formulario');
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const empresaInput = document.querySelector('#empresa');
  const telefonoInput = document.querySelector('#telefono');

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();

    formulario.addEventListener('submit', actualizarCliente);

    // Verificar el ID de la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    idCliente = parametrosURL.get('id');

    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 100);
    }
  });

  function conectarDB() {
    let abrirConexion = window.indexedDB.open('crm', 1);
  
    abrirConexion.onerror = function () {
      console.error('Hubo un error');
    };
  
    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result; // guardamos el resultado
    };
  }

  function actualizarCliente(e) {
    e.preventDefault();

    if (nombreInput.value === '' || emailInput.value === '' || empresaInput.value === '' || telefonoInput.value === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error');
      return;
    }

    const clienteActualizado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      empresa: empresaInput.value,
      telefono: telefonoInput.value,
      id: Number(idCliente)
    };

    const transaction = DB.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');

    objectStore.put(clienteActualizado);

    transaction.oncomplete = () => {
      imprimirAlerta('Editado Correctamente');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    };

    transaction.onerror = (error) => {
      imprimirAlerta('Hubo un error', 'error');
      console.log('Hubo un errorr.', error);
    };
  }

  function obtenerCliente(id) {
    const transaction = DB.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');

    const cliente = objectStore.openCursor();
    cliente.onsuccess = function (event) {
      const cursor = event.target.result;
      if (cursor) {
        if (cursor.value.id == Number(id)) {
          // pasar el que estamos editando...
          llenarFormulario(cursor.value);
        }
        cursor.continue();
      }
    };
  }

  function llenarFormulario(datosCliente) {
    const { nombre, email, empresa, telefono } = datosCliente;
    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
  }

})();