import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: taxonomy term", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/taxonomy-term")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})