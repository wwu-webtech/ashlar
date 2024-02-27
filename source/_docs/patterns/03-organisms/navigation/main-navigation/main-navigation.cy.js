describe("organism: main navigation", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/navigation/main-navigation")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})