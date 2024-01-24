describe("atoms: forms", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/forms")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})