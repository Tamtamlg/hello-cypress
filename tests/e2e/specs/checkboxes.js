/// <reference types="Cypress" />

describe('Checkboxes', () => {
  it('Goes to the page', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
  })
  it('checks checkbox', () => {
    cy.get('#checkboxes > input[type="checkbox"]').check()
  })
  it('unchecks checkboxes', () => {
    cy.wait(1000)
    cy.get('#checkboxes > input[type="checkbox"]:checked').uncheck()
  })
})