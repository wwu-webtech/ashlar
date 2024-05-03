import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: image with description", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/image-with-description")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})