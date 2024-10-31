// Global Cypress tests to call in other specs
export function runAutoA11yTests() {
  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })
  
    it("passes color contrast in dark mode", () => {
      cy.get("html").invoke("attr", "data-theme", "dark")
      cy.injectAxe()
      cy.checkA11y({
        exclude: '.navbar--fixed-top, .theme-doc-sidebar-container, .theme-doc-breadcrumbs, .prism-code, .table-of-contents',
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa"]
        },
        rules: {
          "color-contrast": {enabled: true}
        }
      })
    })
  })
}