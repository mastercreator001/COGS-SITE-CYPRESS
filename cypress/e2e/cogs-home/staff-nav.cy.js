/// <reference types="cypress" />

describe('Sections home page navigation tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    

    it('navigate via menu to head teachers', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('School Staff')
        cy.get('span').contains('See all staff')
        cy.get('#ddh-school').invoke('show').click().wait(1000)
        cy.get('a').contains('Head Teachers')
    })

    it('navigate via menu to teachers', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('School Staff')
        cy.get('span').contains('See all staff')
        cy.get('#ddh-school').invoke('show').click().wait(1000)
        cy.get('a').contains('Teachers')
    })

    it('navigate via menu to history - opening of the school', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('History')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-history').invoke('show').click().wait(1000)
        cy.get('a').contains('Opening of the School')
    })

    it('navigate via menu to history - school day', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('History')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-history').invoke('show').click().wait(1000)
        cy.get('a').contains('School Day')
    })

    it('navigate via menu to history - school closing', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('h6').contains('History')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-history').invoke('show').click().wait(1000)
        cy.get('a').contains('School closing')
    })

    it('navigate via menu to school maps - Opening map', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('Opening map')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-maps').invoke('show').click().wait(1000)
        cy.get('a').contains('Opening map')
    })

    it('navigate via menu to school maps - Construction map', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('Construction map')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-maps').invoke('show').click().wait(1000)
        cy.get('a').contains('Construction map')
    })

    it('navigate via menu to Gallery - Old Photos 1971 onwards', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('Old Photos 1971 onwards')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-gallery').invoke('show').click().wait(1000)
        cy.get('a').contains('Old Photos 1971 onwards')
    })

    it('navigate via menu to Gallery - 1980 onward', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('1980 onward')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-gallery').invoke('show').click().wait(1000)
        cy.get('a').contains('1980 onward')
    })

    it('navigate via menu to Gallery - Trips', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('Trips')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-gallery').invoke('show').click().wait(1000)
        cy.get('a').contains('Trips')
    })

    it('navigate via menu to Demolition - Photos Gallery', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('Photos Gallery')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-demolition').invoke('show').click().wait(1000)
        cy.get('a').contains('Photos Gallery')
    })

    it('navigate via menu to Demolition - Current site status', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('Current site status')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-demolition').invoke('show').click().wait(1000)
        cy.get('a').contains('Current site status')
    })

    it('navigate via menu to Demolition - History', () => {
        cy.get('.dropdown-hover').eq(1)
        .invoke('show').click().wait(1000)
        cy.get('a').contains('History')
        cy.get('span').contains('See all navigations')
        cy.get('#ddh-demolition').invoke('show').click().wait(1000)
        cy.get('a').contains('History')
    })
    
})