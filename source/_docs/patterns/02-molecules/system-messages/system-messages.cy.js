import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: system messages", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/system-messages")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})