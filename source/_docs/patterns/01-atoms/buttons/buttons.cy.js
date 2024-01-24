describe("atom: buttons", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/buttons")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})