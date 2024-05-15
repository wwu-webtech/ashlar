import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: CTA links", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/links/call-to-action")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})