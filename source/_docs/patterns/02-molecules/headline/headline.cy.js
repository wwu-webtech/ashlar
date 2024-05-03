import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: headline", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/headline")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})