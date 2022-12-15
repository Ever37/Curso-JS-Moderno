// Platillos: https://gist.github.com/codigoconjuan/673bda78edadcd66a932eaf93a374b6f
// 1. json-server --watch db.json --port 4000
// https://gist.github.com/codigoconjuan/22431051c4b2a672f2b94e6a4e39d287

let cliente = {
  mesa: '',
  hora: '',
  pedido: [],
};

const categorias = {
  1: 'Comida',
  2: 'Bebidas',
  3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector('#mesa').value;
  const hora = document.querySelector('#hora').value;


  // Revisar si hay campos vacios
  const camposVacios = [mesa, hora].some(campo => campo == '');

  if (camposVacios) {
    // Mostrar mensaje de error en el modal-body
    const existeAlerta = document.querySelector('.invalid-feedback');
    if (!existeAlerta) {
      const alerta = document.createElement('DIV');
      alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
      alerta.textContent = 'Todos los campos son obligatorios';
      document.querySelector('.modal-body form').appendChild(alerta);
      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
    return;
  }

  cliente = { ...cliente, mesa, hora };
  // Ocultar el modal...
  var modalFormulario = document.querySelector('#formulario');
  var modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();

  mostrarSecciones();
  obtenerPlatillos();
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll('.d-none');
  seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
  const url = 'http://127.0.0.1:4000/platillos';

  fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarPlatillos(resultado))
    .catch(error => console.error(error))
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector('#platillos .contenido');

  platillos.forEach(platillo => {
    const row = document.createElement('DIV');
    row.classList.add('row', 'border-top');

    const nombre = document.createElement('DIV');
    nombre.classList.add('col-md-4', 'py-3');
    nombre.textContent = platillo.nombre;

    const precio = document.createElement('DIV');
    precio.classList.add('col-md-3', 'py-3', 'fw-bold');
    precio.textContent = `$${platillo.precio}`;

    const categoria = document.createElement('DIV');
    categoria.classList.add('col-md-3', 'py-3');
    categoria.textContent = categorias[platillo.categoria];

    const inputCantidad = document.createElement('INPUT');
    inputCantidad.type = 'number';
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.id = `producto-${platillo.id}`;
    inputCantidad.classList.add('form-control');

    // Funcion que detecta la cantidad y el platillo que se está agregando
    inputCantidad.onchange = function () {
      const cantidad = parseInt(inputCantidad.value);
      agregarPlatillo({ ...platillo, cantidad });
    }

    const agregar = document.createElement('DIV');
    agregar.classList.add('col-md-2', 'py-3');
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);

    contenido.appendChild(row);
  })
}

function agregarPlatillo(producto) {
  let { pedido } = cliente;

  if (producto.cantidad > 0) {
    // Comprobar si el platillo ya esta en el carrito...
    if (pedido.some(articulo => articulo.id === producto.id)) {
      // Iterar para actualizar la cantidad
      const pedidoActualizado = pedido.map(articulo => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      // Se asigna al array
      cliente.pedido = [...pedidoActualizado];
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      cliente.pedido = [...pedido, producto];
    }
  } else {
    const resultado = pedido.filter(articulo => articulo.id !== producto.id);
    cliente.pedido = resultado;
  }

  limpiarHTML();

  if (cliente.pedido.length) {
    actualizarResumen();
  } else {
    mensajePedidoVacio();
  }
}

function limpiarHTML() {
  const contenido = document.querySelector('#resumen .contenido');
  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}

function actualizarResumen() {
  const contenido = document.querySelector('#resumen .contenido');

  const resumen = document.createElement('DIV');
  resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

  // Mostrar la Mesa
  const mesa = document.createElement('P');
  mesa.textContent = 'Mesa: ';
  mesa.classList.add('fw-bold');

  const mesaSpan = document.createElement('SPAN');
  mesaSpan.textContent = cliente.mesa;
  mesaSpan.classList.add('fw-normal');
  mesa.appendChild(mesaSpan);

  // Hora
  const hora = document.createElement('P');
  hora.textContent = 'Hora: ';
  hora.classList.add('fw-bold');

  const horaSpan = document.createElement('SPAN');
  horaSpan.textContent = cliente.hora;
  horaSpan.classList.add('fw-normal');
  hora.appendChild(horaSpan);

  // Mostrar los platillos Consumidos!
  const heading = document.createElement('H3');
  heading.textContent = 'Platillos Consumidos';
  heading.classList.add('my-4', 'text-center');

  const grupo = document.createElement('UL');
  grupo.classList.add('list-group');

  // Producto pedido
  const { pedido } = cliente;
  pedido.forEach(articulo => {
    const { nombre, cantidad, precio, id } = articulo;

    const lista = document.createElement('LI');
    lista.classList.add('list-group-item');

    const nombreEl = document.createElement('h4');
    nombreEl.classList.add('text-center', 'my-4');
    nombreEl.textContent = nombre;

    const cantidadEl = document.createElement('P');
    cantidadEl.classList.add('fw-bold');
    cantidadEl.textContent = 'Cantidad: ';

    const cantidadValor = document.createElement('SPAN');
    cantidadValor.classList.add('fw-normal');
    cantidadValor.textContent = cantidad;

    const precioEl = document.createElement('P');
    precioEl.classList.add('fw-bold');
    precioEl.textContent = 'Precio: ';

    const precioValor = document.createElement('SPAN');
    precioValor.classList.add('fw-normal');
    precioValor.textContent = `$${precio}`;

    const subtotalEl = document.createElement('P');
    subtotalEl.classList.add('fw-bold');
    subtotalEl.textContent = 'Subtotal: ';

    const subtotalValor = document.createElement('SPAN');
    subtotalValor.classList.add('fw-normal');
    subtotalValor.textContent = calcularSubtotal(articulo);

    // Botón para Eliminar
    const btnEliminar = document.createElement('BUTTON');
    btnEliminar.classList.add('btn', 'btn-danger');
    btnEliminar.textContent = 'Eliminar del pedido';
    // Funcion para eliminar ese contenido
    btnEliminar.onclick = function () {
      eliminarProducto(id);
    }

    // Agregar los Labels a sus contenedores
    cantidadEl.appendChild(cantidadValor)
    precioEl.appendChild(precioValor)
    subtotalEl.appendChild(subtotalValor);

    lista.appendChild(nombreEl);
    lista.appendChild(cantidadEl);
    lista.appendChild(precioEl);
    lista.appendChild(subtotalEl);
    lista.appendChild(btnEliminar);

    grupo.appendChild(lista);
  })

  resumen.appendChild(mesa);
  resumen.appendChild(hora);
  resumen.appendChild(heading);
  resumen.appendChild(grupo);

  // agregar al contenido
  contenido.appendChild(resumen)

  // Mostrar Calculadora de Propinas
  formularioPropinas();
}

function calcularSubtotal(articulo) {
  const { cantidad, precio } = articulo;
  return `$ ${cantidad * precio}`;
}

function eliminarProducto(id) {
  const { pedido } = cliente;
  cliente.pedido = pedido.filter(articulo => articulo.id !== id);

  limpiarHTML();

  if (cliente.pedido.length) {
    actualizarResumen();
  } else {
    mensajePedidoVacio();
  }

  // El producto se eliminó, por lo tanto lo vamos a regresar a 0
  const productoEliminado = `#producto-${id}`;
  const inputEliminado = document.querySelector(productoEliminado);
  inputEliminado.value = 0;
}

function mensajePedidoVacio() {
  const contenido = document.querySelector('#resumen .contenido');

  const texto = document.createElement('P');
  texto.classList.add('text-center');
  texto.textContent = 'Añade los elementos del pedido';

  contenido.appendChild(texto);
}

function formularioPropinas() {
  const contenido = document.querySelector('#resumen .contenido');

  const formulario = document.createElement('DIV');
  formulario.classList.add('col-md-6', 'formulario');

  const divFormulario = document.createElement('DIV');
  divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow');

  const heading = document.createElement('H3');
  heading.classList.add('my-4', 'text-center');
  heading.textContent = 'Propina';

  // Propina 10%
  const radio10 = document.createElement('INPUT');
  radio10.type = "radio";
  radio10.name = 'propina';
  radio10.value = "10";
  radio10.classList.add('form-check-input');
  radio10.onclick = calcularPropina;

  const radio10Label = document.createElement('LABEL');
  radio10Label.textContent = '10%';
  radio10Label.classList.add('form-check-label');

  const radio10Div = document.createElement('DIV');
  radio10Div.classList.add('form-check');
  radio10Div.appendChild(radio10);
  radio10Div.appendChild(radio10Label);

  // Propina 25%
  const radio25 = document.createElement('INPUT');
  radio25.type = "radio";
  radio25.name = 'propina';
  radio25.value = "25";
  radio25.classList.add('form-check-input');
  radio25.onclick = calcularPropina;

  const radio25Label = document.createElement('LABEL');
  radio25Label.textContent = '25%';
  radio25Label.classList.add('form-check-label');

  const radio25Div = document.createElement('DIV');
  radio25Div.classList.add('form-check');
  radio25Div.appendChild(radio25);
  radio25Div.appendChild(radio25Label);

  // Propina 50%
  const radio50 = document.createElement('INPUT');
  radio50.type = "radio";
  radio50.name = 'propina';
  radio50.value = "50";
  radio50.classList.add('form-check-input');
  radio50.onclick = calcularPropina;

  const radio50Label = document.createElement('LABEL');
  radio50Label.textContent = '50%';
  radio50Label.classList.add('form-check-label');

  const radio50Div = document.createElement('DIV');
  radio50Div.classList.add('form-check');
  radio50Div.appendChild(radio50);
  radio50Div.appendChild(radio50Label);

  // Añadirlos a los formularios
  divFormulario.appendChild(heading);
  divFormulario.appendChild(radio10Div);
  divFormulario.appendChild(radio25Div);
  divFormulario.appendChild(radio50Div);

  formulario.appendChild(divFormulario);
  contenido.appendChild(formulario);
}

function calcularPropina() {
  const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;
  const { pedido } = cliente;

  let subtotal = 0;
  pedido.forEach(articulo => {
    subtotal += articulo.cantidad * articulo.precio;
  });

  // Propina
  const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);
  const total = propina + subtotal;

  mostrarTotalHTML(subtotal, total, propina);
}

function mostrarTotalHTML(subtotal, total, propina) {

  const divTotales = document.createElement('DIV');
  divTotales.classList.add('total-pagar');

  // Subtotal
  const subtotalParrafo = document.createElement('P');
  subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
  subtotalParrafo.textContent = 'Subtotal Consumo: ';

  const subtotalSpan = document.createElement('SPAN');
  subtotalSpan.classList.add('fw-normal');
  subtotalSpan.textContent = `$${subtotal}`;
  subtotalParrafo.appendChild(subtotalSpan);

  // Propina
  const propinaParrafo = document.createElement('P');
  propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
  propinaParrafo.textContent = 'Propina: ';

  const propinaSpan = document.createElement('SPAN');
  propinaSpan.classList.add('fw-normal');
  propinaSpan.textContent = `$${propina}`;
  propinaParrafo.appendChild(propinaSpan);

  // Total
  const totalParrafo = document.createElement('P');
  totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
  totalParrafo.textContent = 'Total a Pagar: ';

  const totalSpan = document.createElement('SPAN');
  totalSpan.classList.add('fw-normal');
  totalSpan.textContent = `$${total}`;

  totalParrafo.appendChild(totalSpan);

  // Eliminar el ultimo resultado
  const totalPagarDiv = document.querySelector('.total-pagar');
  if (totalPagarDiv) {
    totalPagarDiv.remove();
  }

  divTotales.appendChild(subtotalParrafo);
  divTotales.appendChild(propinaParrafo);
  divTotales.appendChild(totalParrafo);

  const formulario = document.querySelector('.formulario > div');
  formulario.appendChild(divTotales);
};