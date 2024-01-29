describe("molecule: countdown", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/countdown")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})