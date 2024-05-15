import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: links", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/links")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})
