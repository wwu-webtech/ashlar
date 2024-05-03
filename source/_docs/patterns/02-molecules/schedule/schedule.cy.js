import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: schedule", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/schedule")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})