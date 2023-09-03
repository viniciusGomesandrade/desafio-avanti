/// <reference types="cypress" />

// Welcome to Cypress!

describe('Cenario Registro de usuario', () => {
    beforeEach(() => {
    })
    afterEach(() => {
      cy.screenshot()
    });
      it('Login de usuario', () => {
        cy.visit('https://seubarriga.wcaquino.me/Login')
        cy.get('#email').type('vinijk91@gmail.com')
        cy.get('#senha').type('xvrDCXmz5MUGqpD')
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
     
      })
     
    })
  