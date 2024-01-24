describe("molecule: card", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/card")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})