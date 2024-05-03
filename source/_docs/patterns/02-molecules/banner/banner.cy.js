import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: banner", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/banner")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})