describe("organism: wwu-header", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/headers/wwu-header")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})