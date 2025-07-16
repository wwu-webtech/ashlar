import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: search", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/search")
    cy.get(".theme-doc-markdown").should("be.visible")
  })
  
  runAutoA11yTests();
  
  context("manual accessibility tests", () => {       
    it("search setting menu toggles and announces states as expected", () => {
      const search_toggle = ".theme-doc-markdown .toggle-search"
      const html_doc = ".docs-wrapper"
      
      //on Enter: when opened, settings content visible, aria-expanded true
      cy.get(search_toggle).focus()
      if (Cypress.isBrowser("chrome")) {
        cy.get(search_toggle).realPress("Enter")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(search_toggle).type("{enter}")
      }
      cy.get(search_toggle).should("have.attr", "aria-expanded", "true")
      cy.get(html_doc).should("have.class", "search-open")
      
      //on Enter: when closed, settings content hidden, aria-expanded false
      if (Cypress.isBrowser("chrome")) {
        cy.get(search_toggle).realPress("Enter")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(search_toggle).type("{enter}")
      }
      cy.get(search_toggle).should("have.attr", "aria-expanded", "false")
      cy.get(html_doc).should("not.have.class", "search-open")
    })   
    
    
    it("search closes on Esc press", () => {
      const search_toggle = ".theme-doc-markdown .toggle-search"
      const html_doc = ".docs-wrapper"
      
      //on Esc press: settings content hidden, aria-expanded false
      cy.window().focus()
      cy.get(search_toggle).click()
      if (Cypress.isBrowser("chrome")) {
        cy.get(search_toggle).realPress("Escape")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(search_toggle).type("{esc}")
      }
      cy.get(search_toggle).should("have.attr", "aria-expanded", "false") 
      cy.get(html_doc).should("not.have.class", "search-open")
    })
    
    //"go" button has a type attribute that equals submit
    it("go button has submit attribute", () => {
      const go_button = ".theme-doc-markdown .submit-search"
      
      cy.get(go_button).should("have.attr", "type", "submit")
    })
  })
})