/// <reference types="Cypress" />

describe('Launches a website', () => {
  it('Launches the DemoBlaze site', () => {
    cy.visit('https://www.demoblaze.com/')
  })
})