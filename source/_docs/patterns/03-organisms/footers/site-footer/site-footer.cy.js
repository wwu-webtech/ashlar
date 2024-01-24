describe("organism: site footer", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/footers/site-footer")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})