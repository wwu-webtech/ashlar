describe("molecule: status alert", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/status-alert")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})