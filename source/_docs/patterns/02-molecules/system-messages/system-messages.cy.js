describe("molecule: system messages", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/system-messages")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})