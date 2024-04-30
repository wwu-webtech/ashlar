describe("molecule: accordion", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/accordion")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  context("automated accessibility tests", () => {
    it("passes axe core accessibility tests", () => {
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown")
    })

    it("passes color contrast in dark mode", () => {
      cy.get("html").invoke("attr", "data-theme", "dark")
      cy.injectAxe()
      cy.checkA11y(".theme-doc-markdown", {
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

  context("manual accessibility tests", () => {
    it("accordion item toggles and announces states as expected", () => {
     /*
      * on click/enter/space 
      * accordion item content is expanded, aria-expanded true
      */
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title > .expand").click()
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title > .expand").should("have.attr", "aria-expanded", "true")
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title + .content").should("have.class", "is-expanded")

     /*
      * on 2nd click/enter/space 
      * accordion item content is collapsed, aria-expanded false
      */
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title > .expand").click()
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title > .expand").should("have.attr", "aria-expanded", "false")
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title + .content").should("not.have.class", "is-expanded")
    })

    it("accordion item closes on Esc press", () => {
     /*
      * on 2nd click/enter/space 
      * accordion item content is collapsed, aria-expanded false
      */
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title > .expand").click()
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title > .expand").should("have.focus") 
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title > .expand").type("{esc}").should("have.attr", "aria-expanded", "false") 
      cy.get(".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title + .content").should("not.have.class", "is-expanded")
    })
  })
})