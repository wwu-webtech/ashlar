describe("molecule: switcher", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/switcher")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})