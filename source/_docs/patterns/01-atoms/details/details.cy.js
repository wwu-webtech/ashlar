import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: details", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/details")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})