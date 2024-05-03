import { runAutoA11yTests } from "../../../../cypress/support/global"

describe('molecule: donut chart', () => {
  beforeEach(() => {
    cy.visit('/patterns/molecules/charts/donut-chart')
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();
})