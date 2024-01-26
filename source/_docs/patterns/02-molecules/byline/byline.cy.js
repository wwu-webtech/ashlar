describe("molecule: byline", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/byline")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})