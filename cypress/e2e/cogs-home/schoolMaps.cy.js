/// <reference types="cypress" />

describe('School Maps section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('changes page when we click on a reworked image of the school in its design phase', () => {
        cy.get('.w-100').eq(29).click ({ force: true })
    })

    it('changes page when we click on Nav tabs', () => {
        cy.get('.w-100').eq(30).click ({ force: true })
    })

    it('changes page when we click on More detailed map', () => {
        cy.get('.w-100').eq(31).click ({ force: true })
    })

    it('changes page when we click on A more detailed map of the school after it was transferred from C of E to Christ The King Lower Campus', () => {
        cy.get('.w-100').eq(32).click()
    })

    
})