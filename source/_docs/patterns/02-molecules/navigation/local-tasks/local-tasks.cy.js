import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("molecule: local tasks", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/navigation/local-tasks")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})