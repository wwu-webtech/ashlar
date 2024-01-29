describe("organism: profile", () => {
  beforeEach(() => {
    cy.visit("/patterns/organisms/profile")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})