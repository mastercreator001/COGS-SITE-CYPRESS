/// <reference types="cypress" />

describe('Computer Programming section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('changes page when we click on does anyone remember these computers with the floppy disc drive', () => {
        cy.get('.w-100').eq(33).click()
    })

    it('changes page when we click on such power we never had', () => {
        cy.get('.w-100').eq(34).click()
    })

    it('changes page when we click on a considerable upgrade in the end as bbc and development and potiental proved popular', () => {
        cy.get('.w-100').eq(35).click()
    })

    it('changes page when we click on these discs were massive as you might remember, or our hands were small', () => {
        cy.get('.w-100').eq(36).click()
    })

    
})