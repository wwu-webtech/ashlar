describe("atoms: paragraphs", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/paragraphs")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})