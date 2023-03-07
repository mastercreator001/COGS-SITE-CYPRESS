/// <reference types="cypress" />

describe('Sections home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('navigate via the bar to the School Documents', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('All about maps of the school').click({ force: true });
        cy.get('.text-success').should('have.text','groupedhomepanoramadomain');
    })
    
    it('navigte via the bar to the Foundation', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('See our colors, icons and typography').click({ force: true });
        cy.get('.text-success').should('have.text','groupedhomepanoramadomain');
  })

    it('navigte via the bar to the components', () => {
        cy.get('#dropdownMenuPages').invoke('show').click();
        cy.get('#dropdownMenuPages').click({ force: true })

        .wait(1000)
        cy.get('span'). contains('Explore our collection of fully designed components').click({ force: true });
        cy.get('.text-success').should('have.text','groupedhomepanoramadomain');
})      
})