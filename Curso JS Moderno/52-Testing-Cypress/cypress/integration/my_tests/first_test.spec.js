/// <reference types="cypress" />

// npx cypress open
// npx cypress run

// https://docs.cypress.io/guides/references/best-practices
describe('Carga la página principal', () => {
    it('Carga la página principal', () => {
        cy.visit('/index.html');

        // Verificar el elemento y sy texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // Verificar que exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verificar que exista el elemento y contenga un texto
        cy.get('[data-cy="titulo-proyecto"')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal', 'Juan Pablo');
    })
})