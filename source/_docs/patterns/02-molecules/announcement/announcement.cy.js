describe("molecule: alerts", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/alerts")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})