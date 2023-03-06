/// <reference types="cypress" />

describe('Navigation home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('navigate via the bar to the contact page', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('Contact Us').click({ force: true });
        cy.get('.text-success').should('have.text','Contact us');
    })
    
    it('navigte via the bar to the About Us', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('About Us').click({ force: true });
        cy.get('.text-success').should('have.text','Front End Design1200+10/7');
  })

    it('navigte via the bar to the Author/Creator', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('Author/Creator').click({ force: true });
        cy.get('.text-success').should('have.text','More about me Read more Read more Read more ');
})      
})