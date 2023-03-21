/// <reference types="cypress" />

describe('Docs home page navigation tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('navigate via menu to Docs', () => {
        cy.get('.dropdown-hover').eq(2)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('School Documents')
        cy.get('span').contains('All about maps of the school')
        cy.get('#ddh-gallery').invoke('show').click().wait(1000)
        cy.get('a').contains('School Documents')
    })

    it('navigate via menu to Docs', () => {
        cy.get('.dropdown-hover').eq(2)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('Foundation')
        cy.get('span').contains('See our colors, icons and typography')
        cy.get('#ddh-gallery').invoke('show').click().wait(1000)
        cy.get('a').contains('Foundation')
    })

    it('navigate via menu to Docs', () => {
        cy.get('.dropdown-hover').eq(2)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('Components')
        cy.get('span').contains('Explore our collection of fully designed components')
        cy.get('#ddh-history').invoke('show').click().wait(1000)
        cy.get('a').contains('Components')
    })

    
    
})