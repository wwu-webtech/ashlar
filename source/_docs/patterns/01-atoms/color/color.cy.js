describe("atoms: color", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/color")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})