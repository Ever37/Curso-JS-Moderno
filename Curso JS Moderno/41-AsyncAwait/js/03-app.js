/*
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

// Async await
// await can be used only in asyc functions
const ejecutar = async () => {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();
        console.log(2 + 2); // Esto se va a ejecutar luego de 3 segundos
        // posterior a descargarClientes()
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}
ejecutar();
*/