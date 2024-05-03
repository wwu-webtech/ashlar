import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: dialog", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/dialog")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})