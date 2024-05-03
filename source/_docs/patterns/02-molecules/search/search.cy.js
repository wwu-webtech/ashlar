import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: search", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/search")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})