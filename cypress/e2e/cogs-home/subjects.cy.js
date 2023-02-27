/// <reference types="cypress" />

describe('Subjects section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9002')
    })

    it('changes page when we click on Science', () => {
        cy.get('.w-100').eq(21).click()
    })

    it('changes page when we click on Maths', () => {
        cy.get('.w-100').eq(22).click()
    })

    it('changes page when we click on English', () => {
        cy.get('.w-100').eq(23).click()
    })

    it('changes page when we click on P.E', () => {
        cy.get('.w-100').eq(24).click()
    })

    it('changes page when we click on Music Studies', () => {
        cy.get('.w-100').eq(25).click()
    })

    it('changes page when we click on Design and Technology', () => {
        cy.get('.w-100').eq(26).click()
    })

    it('changes page when we click on Domestic Science', () => {
        cy.get('.w-100').eq(27).click()
    })

    it('changes page when we click on Art And Design', () => {
        cy.get('.w-100').eq(28).click()
    })
})