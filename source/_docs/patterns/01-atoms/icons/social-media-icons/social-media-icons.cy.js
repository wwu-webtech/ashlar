import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("atoms: social media icons", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/icons/social-media-icons")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})