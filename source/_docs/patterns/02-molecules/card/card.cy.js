import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: card", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/card")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})