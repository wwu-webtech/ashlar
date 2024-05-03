import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: main navigation", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/navigation/main-navigation")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})