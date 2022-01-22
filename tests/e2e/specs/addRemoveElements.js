/// <reference types="Cypress" />

describe('Add/remove element', () => {
  it('Goes to the page', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
  })
  it('clicks "Add Element" button', () => {
    cy.get('button[onclick="addElement()"]').click()
  })
})