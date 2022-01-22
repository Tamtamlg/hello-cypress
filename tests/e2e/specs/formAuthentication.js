/// <reference types="Cypress" />

describe('Form Authentication', () => {
  it('Goes to the page', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })
  it('Types data', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
  })
  it('Sumbits data', () => {
    cy.get('button[type="submit"]').click()
  })
})