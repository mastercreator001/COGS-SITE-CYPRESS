/// <reference types="cypress" />

describe('school trips 1-4 section home page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('changes page when we click on 1St years Singleton', () => {
        cy.get('.w-100').eq(40).click()
    })
    
    it('changes page when we click on Totland YMCA Youth Hostel', () => {
        cy.get('.w-100').eq(41).click()
    })

    it('changes page when we click on Malham Yorkshire, Malham Cove, Imax, Jorvik', () => {
        cy.get('.w-100').eq(42).click ({ force: true })
    })

    it('changes page when we click on Poole In Dorset Adventure Center', () => {
        cy.get('.w-100').eq(43).click()
    })

    it('changes page when we click on Carisbrooke Castle', () => {
        cy.get('.w-100').eq(44).click()
    })

    it('changes page when we click on Roman Villa Newport', () => {
        cy.get('.w-100').eq(45).click ({ force: true })
    })

    it('changes page when we click on Various Trips Out Across The Island', () => {
        cy.get('.w-100').eq(46).click()
    })

    it('changes page when we click on Osbourne House', () => {
        cy.get('.w-100').eq(47).click()
    })

    it('changes page when we click on Apollo Theatre Trip', () => {
        cy.get('.w-100').eq(48).click ({ force: true })
    })
})