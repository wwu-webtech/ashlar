describe("molecule: banner", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/banner")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})