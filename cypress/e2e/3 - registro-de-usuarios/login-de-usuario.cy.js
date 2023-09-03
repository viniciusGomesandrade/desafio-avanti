/// <reference types="cypress" />

// Welcome to Cypress!

describe('Cenario Login de usuario', () => {
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
      cy.get('.alert').should('contain','Bem vindo')
   
    })

  })
