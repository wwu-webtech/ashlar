describe("molecule: background video", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/background-video")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})