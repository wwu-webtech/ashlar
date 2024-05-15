import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: status alert", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/status-alert")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})