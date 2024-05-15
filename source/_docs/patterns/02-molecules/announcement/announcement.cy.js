import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: alerts", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/alerts")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})