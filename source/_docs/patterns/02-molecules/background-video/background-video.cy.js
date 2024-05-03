import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: background video", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/background-video")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})