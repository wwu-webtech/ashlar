describe("molecule: image link", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/image-link")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })

    it("passes color contrast in dark mode", () => {
      cy.get('html').invoke('attr', 'data-theme', 'dark')
      cy.injectAxe()
      cy.checkA11y('.theme-doc-markdown', {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa']
        },
        rules: {
          'color-contrast': {enabled: true}
        }
      })
    })
  })
})