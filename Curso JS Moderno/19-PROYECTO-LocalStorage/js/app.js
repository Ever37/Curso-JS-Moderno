// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Event Listeners
eventListener();

function eventListener() {
    // Cuando el usuario crea un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    });
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();
    // Textarea donde el usuario escribe
    const tweet = document.querySelector("#tweet").value;

    // validation
    if (tweet == '') {
        mostrarError('Un mensjae no puede ir vacio');
        return; // evita que se ejecuten más lineas de código.
    }

    const tweetObj = {
        id: Date.now(),
        tweet,
    }

    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el html
    crearHTML();

    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onClick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el html
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // insertarlo en el html
            listaTweets.appendChild(li);
        })
    }
    sincronizarStorage();
}

// Agrega los tweets actuales a LocalStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar el html
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}