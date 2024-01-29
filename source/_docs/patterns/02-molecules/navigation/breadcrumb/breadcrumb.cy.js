describe("molecule: breadcrumb", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/navigation/breadcrumb")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})