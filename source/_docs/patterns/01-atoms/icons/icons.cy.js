import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: icons", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/icons")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})