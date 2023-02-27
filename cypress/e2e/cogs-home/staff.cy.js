/// <reference types="cypress" />

describe('Staff section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9002')
    })

    it('changes page when we click on head teachers', () => {
        cy.get('.w-100').eq(11).click()
    })

    it('changes page when we click on Senoir Staff', () => {
        cy.get('.w-100').eq(12).click()
    })
    
    it('changes page when we click on Teaching Staff', () => {
        cy.get('.w-100').eq(13).click()
    })

    it('changes page when we click on caretakers', () => {
        cy.get('.w-100').eq(14).click()
    })

    it('changes page when we click on dinner ladies', () => {
        cy.get('.w-100').eq(15).click()
    })

    it('changes page when we click on kitchen staff', () => {
        cy.get('.w-100').eq(16).click()
    })

    it('changes page when we click on kitchen staff', () => {
        cy.get('.w-100').eq(17).click()
    })

    it('changes page when we click on library staff', () => {
        cy.get('.w-100').eq(18).click()
    })

    it('changes page when we click on Deputy Head Teachers', () => {
        cy.get('.w-100').eq(19).click()
    })
})