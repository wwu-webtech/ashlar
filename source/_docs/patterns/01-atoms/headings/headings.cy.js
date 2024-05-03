import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: headings", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/headings")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})