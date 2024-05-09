import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: timeline", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/timeline")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})