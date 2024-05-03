import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: wwu-header", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/headers/wwu-header")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})