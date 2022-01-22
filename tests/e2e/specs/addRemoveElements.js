/// <reference types="Cypress" />

const ADD_BTN = 'button[onclick="addElement()"]'
const ADDED_MANUALLY = '.added-manually'

describe('Add/remove element', () => {
  it('Goes to the page', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
  })
  it('has correct text', () => {
    cy.get(ADD_BTN).should('have.text', 'Add Element')
  })
  it('clicks "Add Element" 10 times', () => {
    cy.get(ADDED_MANUALLY).should('have.length', 0)
    for (let i = 0; i < 10; i++) {
      cy.get(ADD_BTN).click()
    }
    cy.get(ADDED_MANUALLY).should('have.length', 10)
  })
  it('deletes all buttons', () => {
    cy.get(ADDED_MANUALLY).each(($el) => {
      cy.wrap($el).click()
    })
    cy.get(ADDED_MANUALLY).should('have.length', 0)
  })
})