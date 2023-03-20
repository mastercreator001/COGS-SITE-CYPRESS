/// <reference types="cypress" />

describe('Staff section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('changes page when we click on head teachers', () => {
        cy.get('.w-100').eq(11).click({ force: true })
    })

    it('changes page when we click on Deputy Head Teachers', () => {
        cy.get('.w-100').eq(12).click({ force: true })
    })

    it('changes page when we click on Senoir Staff', () => {
        cy.get('.w-100').eq(13).click({ force: true })
    })
    
    it('changes page when we click on Teaching Staff', () => {
        cy.get('.w-100').eq(14).click({ force: true })
    })

    it('changes page when we click on caretakers', () => {
        cy.get('.w-100').eq(15).click({ force: true })
    })

    it('changes page when we click on dinner ladies', () => {
        cy.get('.w-100').eq(16).click({ force: true })
    })

    it('changes page when we click on kitchen staff', () => {
        cy.get('.w-100').eq(17).click({ force: true })
    })

    it('changes page when we click on kitchen staff', () => {
        cy.get('.w-100').eq(18).click({ force: true })
    })

    it('changes page when we click on library staff', () => {
        cy.get('.w-100').eq(19).click({ force: true })
    })

    it('changes page when we click on French teacher Miss Forer', () => {
        cy.get('.w-100').eq(20).click({ force: true })
    })
})