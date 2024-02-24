describe("organism: homepage icon nav", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/navigation/homepage-icon-nav")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})