import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: site footer", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/footers/site-footer")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})