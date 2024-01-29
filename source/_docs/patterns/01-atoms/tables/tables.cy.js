describe("atoms: tables", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/tables")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})