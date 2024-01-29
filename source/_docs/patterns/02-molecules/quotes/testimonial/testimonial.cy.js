describe("molecule: testimonial", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/quotes/testimonial")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  })
})