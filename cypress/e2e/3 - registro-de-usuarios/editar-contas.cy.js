/// <reference types="cypress" />

// Welcome to Cypress!

describe('Cenário editar contas', () => {
    beforeEach(() => {        
      cy.visit('https://seubarriga.wcaquino.me/Login')

    })
    afterEach(() => {
      cy.screenshot()
    });
  
      it('Editar contas', () => {
        cy.get('#email').type('vinijk91@gmail.com')
        cy.get('#senha').type('xvrDCXmz5MUGqpD')
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/editarConta?id=1865661"] > .glyphicon').click()
        cy.get('#nome').clear()
        cy.get('#nome').type('issoexistesim vinicius')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Conta alterada com sucesso!')
     
      })
     
    })