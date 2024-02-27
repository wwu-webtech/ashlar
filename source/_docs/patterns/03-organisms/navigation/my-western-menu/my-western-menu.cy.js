describe("organism: myWestern menu", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/navigation/my-western-menu")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})