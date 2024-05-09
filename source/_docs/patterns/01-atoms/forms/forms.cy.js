import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: forms", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/forms")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})