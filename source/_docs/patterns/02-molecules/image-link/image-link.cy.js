import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: image link", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/image-link")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})