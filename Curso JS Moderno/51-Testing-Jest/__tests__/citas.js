class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}

describe('Probar la clase de Citas', () => {

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '1239132',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'covid'
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar una cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Juan',
            telefono: '1239132',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'covid'
        };

        citas.editarCita(citaActualizada);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    });
})