import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: byline", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/byline")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})