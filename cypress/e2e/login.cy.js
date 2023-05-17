/// <reference types="cypress" />

describe('Login', () => {
  it('TC001 - Login (Positive)', () => {
    cy.visit('/')
    cy.fillLoginFormAndSubmit('demouser', 'abc123')
    cy.checkingAccountPage()
  })
})