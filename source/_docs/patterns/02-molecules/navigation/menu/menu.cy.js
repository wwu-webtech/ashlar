import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("molecule: menu", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/navigation/menu")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})