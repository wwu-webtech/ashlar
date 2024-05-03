import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: horizontal rule", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/horizontal-rule")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})