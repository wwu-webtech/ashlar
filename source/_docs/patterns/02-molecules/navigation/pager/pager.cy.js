import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("molecule: pager", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/navigation/pager")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})