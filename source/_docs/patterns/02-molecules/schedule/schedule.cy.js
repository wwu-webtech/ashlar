describe("molecule: schedule", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/schedule")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})