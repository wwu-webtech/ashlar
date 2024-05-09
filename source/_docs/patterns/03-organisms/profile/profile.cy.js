import { runAutoA11yTests } from "../../../cypress/support/global"

describe("organism: profile", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/profile")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})