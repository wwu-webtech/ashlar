import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: background slideshow", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/slide-banner")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})