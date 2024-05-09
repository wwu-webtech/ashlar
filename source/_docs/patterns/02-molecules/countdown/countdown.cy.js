import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: countdown", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/countdown")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})