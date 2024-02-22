describe("molecule: local tasks", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/navigation/local-tasks")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})