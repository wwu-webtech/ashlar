describe("molecule: accordion", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/accordion")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})