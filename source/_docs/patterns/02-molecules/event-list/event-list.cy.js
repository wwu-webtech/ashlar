import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: event list", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/event-list")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})