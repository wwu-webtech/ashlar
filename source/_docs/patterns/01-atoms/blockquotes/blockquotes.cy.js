describe("atom: blockquotes", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/blockquotes")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})