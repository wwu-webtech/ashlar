import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: accordion", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/accordion")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();

  context("manual accessibility tests", () => {
    it("accordion items are focusable", () => {
      const accordion_item1 = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title > .expand"
      const accordion_item2 = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title > .expand"

     // On Tab: Focus moves from one accordion button to next button 
      cy.get(accordion_item1).focus()
      cy.get(accordion_item1).should("have.focus")
      if (Cypress.isBrowser("chrome")) {
        cy.get(accordion_item1).realPress("Tab")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(accordion_item1).tab()
      }
      cy.get(accordion_item2).should("have.focus")
    })
    
    it("accordion item toggles and announces states as expected", () => {
      const accordion_item_cat = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Cats'] > .title"

     // on Enter: accordion item content expands, aria-expanded true
      cy.window().focus()
      cy.get(accordion_item_cat).find(".expand").click()
      cy.get(accordion_item_cat).find(".expand").should("have.attr", "aria-expanded", "true")
      cy.get(accordion_item_cat).siblings(".content").should("have.class", "is-expanded")

     // on 2nd Enter: accordion item content collapses, aria-expanded false
      if (Cypress.isBrowser("chrome")) {
        cy.get(accordion_item_cat).find(".expand").realPress("Enter")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(accordion_item_cat).find(".expand").type("{enter}")
      }
      cy.get(accordion_item_cat).find(".expand").should("have.attr", "aria-expanded", "false")
      cy.get(accordion_item_cat).siblings(".content").should("not.have.class", "is-expanded")
    })

    it("accordion item closes on Esc press", () => {
      const accordion_item_dog = ".theme-doc-markdown wwu-accordion:first-of-type > [label='Dogs'] > .title"

     // on Esc press: accordion item content collapses, aria-expanded false
      cy.window().focus()
      cy.get(accordion_item_dog).find(".expand").click()
      if (Cypress.isBrowser("chrome")) {
        cy.get(accordion_item_dog).find(".expand").realPress("Escape")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(accordion_item_dog).find(".expand").type("{esc}")
      }
      cy.get(accordion_item_dog).find(".expand").should("have.attr", "aria-expanded", "false") 
      cy.get(accordion_item_dog).siblings(".content").should("not.have.class", "is-expanded")
    })
  })
})