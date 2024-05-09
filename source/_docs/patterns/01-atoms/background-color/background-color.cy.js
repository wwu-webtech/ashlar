import { runAutoA11yTests } from "../../../cypress/support/global"

describe('atom: background-color', () => {
  beforeEach(() => {
    cy.visit('/patterns/atoms/background-color')
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})
