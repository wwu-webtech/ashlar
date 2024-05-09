import { runAutoA11yTests } from "../../../cypress/support/global"

describe("atoms: lists", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/lists")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})