import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: paragraphs", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/paragraphs")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})