import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: wwu footer", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/footers/wwu-footer")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})