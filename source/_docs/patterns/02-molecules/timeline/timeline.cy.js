describe("molecule: timeline", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/timeline")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})