/// <reference types="cypress" />

// Welcome to Cypress!

describe('Cenario adicionar conta', () => {
    beforeEach(() => {
      cy.visit('https://seubarriga.wcaquino.me/Login')
    })
    afterEach(() => {
      cy.screenshot()
    });

     it('adicionar conta', () =>{
        cy.get('#email').type('vinijk91@gmail.com')
        cy.get('#senha').type('xvrDCXmz5MUGqpD')
        cy.get('.btn').click()
        cy.get('.alert').should('contain','')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('gomesnadrade')
        cy.get('.btn').click()
       
     })
    })
  