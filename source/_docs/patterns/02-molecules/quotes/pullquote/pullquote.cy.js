import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("molecule: pullquote", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/quotes/pullquote")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})