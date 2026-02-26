import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("molecule: testimonial", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/testimonial")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})