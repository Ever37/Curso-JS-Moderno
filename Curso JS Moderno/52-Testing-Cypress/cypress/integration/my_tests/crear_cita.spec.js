/// <reference types="cypress" />

// https://docs.cypress.io/guides/references/best-practices
describe('Llena los campos para una nueva cita y la muestra', () => {
    it('Campos nueva cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook');
        
        cy.get('[data-cy="propietario-input"]')
            .type('Ever');

        cy.get('[data-cy="telefono-input"]')
            .type('3464698661');

        cy.get('[data-cy="fecha-input"]')
            .type('2020-12-03');
        
        cy.get('[data-cy="hora-input"]')
            .type('20:30');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('El gato solo come y duerme');
        
        cy.get('[data-cy="submit-cita"]')
            .click()
        
        // Verificar el texto de las citas        
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

                // seleccionar la alerta
        cy.get('[data-cy="alerta"')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
            
        cy.get('[data-cy="alerta"')
            .should('have.class', 'alert-success');

    })
})