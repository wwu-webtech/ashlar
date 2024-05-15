import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: switcher", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/switcher")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})