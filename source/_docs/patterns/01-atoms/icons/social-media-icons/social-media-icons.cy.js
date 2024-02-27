describe("atoms: social media icons", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/icons/social-media-icons")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})