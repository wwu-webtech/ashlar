describe("atoms: taxonomy term", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/taxonomy-term")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})