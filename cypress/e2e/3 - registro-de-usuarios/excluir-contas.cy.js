/// <reference types="cypress" />

// Welcome to Cypress!

describe('Cenario Registro de usuario', () => {
    beforeEach(() => {     
      cy.visit('https://seubarriga.wcaquino.me/Login')
    })
    afterEach(() => {
      cy.screenshot()
    });
      it('Login de usuario', () => {
        cy.get('#email').type('vinijk91@gmail.com')
        cy.get('#senha').type('xvrDCXmz5MUGqpD')
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/removerConta?id=1893423"] > .glyphicon').click()
        cy.get('.alert').should('contain', 'Conta removida com sucesso')
      })
    })
  