/// <reference types="cypress" />

describe('Attention Catchers articles section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9002')
    })

    it('changes page when we click on School opening A brief history', () => {
        cy.get('.w-100').eq(37).click()
    })

    it('changes page when we click on School Closing A brief summary', () => {
        cy.get('.w-100').eq(38).click()
    })

    it('changes page when we click on School Building Images', () => {
        cy.get('.w-100').eq(39).click()
    })

    
})