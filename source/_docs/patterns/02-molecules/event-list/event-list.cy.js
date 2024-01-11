describe("molecule: event list", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/event-list")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})