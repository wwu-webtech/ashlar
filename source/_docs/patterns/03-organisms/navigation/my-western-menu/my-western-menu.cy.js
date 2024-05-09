import { runAutoA11yTests } from "../../../../cypress/support/global"

describe("organism: myWestern menu", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/navigation/my-western-menu")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})