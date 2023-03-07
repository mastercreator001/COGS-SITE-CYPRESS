/// <reference types="cypress" />

describe('Sections home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('navigate via the bar to the staff', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('See all staff').click({ force: true });
        cy.get('.text-success').should('have.text','groupedhomepanoramadomain');
    })
    
    it('navigate via the bar to the history', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('See all navigations').click({ force: true });
        cy.get('.text-success').should('have.text','groupedhomepanoramadomain');
  })

    it('navigate via the bar to the school maps', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get ('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get ('span'). contains('See all examples').click({ force: true });
        cy.get ('.text-success').should('have.text','groupedhomepanoramadomain');
})      

    it('navigate via the bar to the Gallery', () => {
      cy.get('#dropdownMenuPages').invoke('show').click();
      cy.get ('#dropdownMenuPages').click({ force: true })

      .wait(1000)
      cy.get ('span'). contains('See all examples').click({ force: true });
      cy.get ('.text-success').should('have.text','groupedhomepanoramadomain');
    })

    it('navigate via the bar to the Demolition', () => {
      cy.get('#dropdownMenuPages').invoke('show').click();
      cy.get ('#dropdownMenuPages').click({ force: true })

      .wait(1000)
      cy.get ('span'). contains('See all examples').click({ force: true });
      cy.get ('.text-success').should('have.text','groupedhomepanoramadomain');
    })      
})