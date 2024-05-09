import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("molecule: breadcrumb", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/navigation/breadcrumb")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})