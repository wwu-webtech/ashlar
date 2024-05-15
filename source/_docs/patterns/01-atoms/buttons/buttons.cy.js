import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atom: buttons", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/buttons")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})
