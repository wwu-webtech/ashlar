import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: overlays", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/overlays")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})