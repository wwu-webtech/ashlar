describe("atoms: logo", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/logo")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})