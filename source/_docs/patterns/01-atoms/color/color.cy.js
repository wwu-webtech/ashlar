import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: color", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/color")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})