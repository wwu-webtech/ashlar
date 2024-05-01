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
    it("accordion items are focusable", () => {
      const accordion_item1 = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title"
      const accordion_item2 = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title"

     /*
      * On Tab: Focus moves from one accordion button to next button 
      */
      cy.get(accordion_item1).find(".expand").focus()
      cy.get(accordion_item1).find(".expand").should("have.focus") 
      cy.get(accordion_item1).find(".expand").realPress("Tab")
      cy.get(accordion_item2).find(".expand").should("have.focus")
    })
    
    it("accordion item toggles and announces states as expected", () => {
      const accordion_item = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title"

     /*
      * on click/enter/space 
      * accordion item content is expanded, aria-expanded true
      */
      cy.get(accordion_item).find(".expand").click()
      cy.get(accordion_item).find(".expand").should("have.attr", "aria-expanded", "true")
      cy.get(accordion_item).siblings(".content").should("have.class", "is-expanded")

     /*
      * on 2nd click/enter/space 
      * accordion item content is collapsed, aria-expanded false
      */
      cy.get(accordion_item).find(".expand").click()
      cy.get(accordion_item).find(".expand").should("have.attr", "aria-expanded", "false")
      cy.get(accordion_item).siblings(".content").should("not.have.class", "is-expanded")
    })

    it("accordion item closes on Esc press", () => {
      const accordion_item = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title"

     /*
      * on Esc press 
      * accordion item content is collapsed, aria-expanded false
      */
      cy.get(accordion_item).find(".expand").click()
      cy.get(accordion_item).find(".expand").should("have.focus") 
      cy.get(accordion_item).find(".expand").type("{esc}").should("have.attr", "aria-expanded", "false") 
      cy.get(accordion_item).siblings(".content").should("not.have.class", "is-expanded")
    })
  })
})