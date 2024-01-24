describe("organism: wwu footer", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/footers/wwu-footer")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})