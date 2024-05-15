import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: homepage icon nav", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/navigation/homepage-icon-nav")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})