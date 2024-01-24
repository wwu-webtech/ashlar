describe("atoms: CTA links", () => {
  beforeEach(() => {
    cy.visit("/patterns/atoms/links/call-to-action")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})