
// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    // Enviar email
    btnEnviar.addEventListener('click', enviarEmail);
    // formulario.addEventListener('submit', enviarEmail);
}

// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarFormulario(e) {
    
    if(e.target.value.length > 0) {

        // Elimina los errores...
        const error = document.querySelector('p.error');
        if(error) {
          error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    // https://emailregex.com/
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // REGEX - Validar email: https://gist.github.com/codigoconjuan/930b0b9b1964e2b54be35dd476d5ce74
    if(e.target.type === 'email') {
        
        if(er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if(error) {
              error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');            
            mostrarError('Email no valido');
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.backgroud-red-100');

    if (alerta) {
        alerta.remove();
    }

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'backgroud-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

    formulario.appendChild(mensajeError);
}

// Envia el email
function enviarEmail(e) {
    e.preventDefault();


    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex'; 

    // Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';
        // Mensaje que dice que se envió correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        // Inserta el párrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove(); // Eliminar el mensaje de éxito
            resetearFormulario();
        }, 5000);
    }, 3000);
}

// Función que resetea el formulario
function resetearFormulario () {
    e.preventDefault();
    formulario.reset();
    iniciarApp();
}