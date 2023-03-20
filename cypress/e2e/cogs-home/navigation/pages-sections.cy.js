/// <reference types="cypress" />

describe('Sections home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('navigate via the bar to the staff', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span').contains('See all staff')
        cy.get('h6').contains('School Staff');
    })
    
    it('navigate via the bar to the history', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span').contains('See all navigations');
        cy.get('h6').contains('History');
  })

    it('navigate via the bar to the school maps', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get ('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get ('span'). contains('See all input areas').;
        cy.get('h6').contains('School maps');
})      

    it('navigate via the bar to the Gallery', () => {
      cy.get('#dropdownMenuPages').invoke('show').click();
      cy.get ('#dropdownMenuPages').click({ force: true })

      .wait(1000)
      cy.get ('span'). contains('See all examples');
      cy.get('h6').contains('Gallery');
    })

    it('navigate via the bar to the Demolition', () => {
      cy.get('#dropdownMenuPages').invoke('show').click();
      cy.get ('#dropdownMenuPages').click({ force: true })

      .wait(1000)
      cy.get ('span'). contains('See all elements');
      cy.get('h6').contains('Demolition');
    })      
})