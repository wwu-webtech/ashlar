import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: tables", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/tables")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})
