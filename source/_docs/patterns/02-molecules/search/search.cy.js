import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: search", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/search")
    cy.get(".theme-doc-markdown").should("be.visible")
  })
  
  runAutoA11yTests();
  
  context("manual accessibility tests", () => {       
    it("search setting menu toggles and announces states as expected", () => {
      const settings_toggle = ".theme-doc-markdown .toggle-settings"
      
      //on Enter: when opened, settings content visible, aria-expanded true
      cy.get(settings_toggle).focus()
      if (Cypress.isBrowser("chrome")) {
        cy.get(settings_toggle).realPress("Enter")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(settings_toggle).type("{enter}")
      }
      cy.get(settings_toggle).should("have.attr", "aria-expanded", "true")
      cy.get(settings_toggle).siblings(".search-menu").should("have.class", "open")
      
      //on Enter: when closed, settings content hidden, aria-expanded false
      if (Cypress.isBrowser("chrome")) {
        cy.get(settings_toggle).realPress("Enter")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(settings_toggle).type("{enter}")
      }
      cy.get(settings_toggle).should("have.attr", "aria-expanded", "false")
      cy.get(settings_toggle).siblings(".search-menu").should("not.have.class", "open")
    })   
    
    
    it("search settings menu closes on Esc press", () => {
      const settings_toggle = ".theme-doc-markdown .toggle-settings"
      
      //on Esc press: settings content hidden, aria-expanded false
      cy.window().focus()
      cy.get(settings_toggle).click()
      if (Cypress.isBrowser("chrome")) {
        cy.get(settings_toggle).realPress("Escape")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(settings_toggle).type("{esc}")
      }
      cy.get(settings_toggle).should("have.attr", "aria-expanded", "false") 
      cy.get(settings_toggle).siblings(".search-menu").should("not.have.class", "open")
    })
    
    //"go" button has a type attribute that equals submit
    it("go button has submit attribute", () => {
      const go_button = ".theme-doc-markdown .submit-search"
      
      cy.get(go_button).should("have.attr", "type", "submit")
    })
  })
})