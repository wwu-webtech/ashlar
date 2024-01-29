describe("atoms: links", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/links")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})