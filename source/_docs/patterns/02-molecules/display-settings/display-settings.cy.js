import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: pre-header", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/headers/pre-header")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})