describe("molecule: search", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/search")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})