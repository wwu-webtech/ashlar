import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: statistic", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/statistic")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})