import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atom: blockquotes", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/blockquotes")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})