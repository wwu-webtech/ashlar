import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: logo", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/logo")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})