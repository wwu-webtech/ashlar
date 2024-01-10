describe("atoms: headings", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/headings")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})