import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: dialog", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/dialog")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();

  context("manual accessibility tests", () => {
    it("wwu-dialog follows ARIA semantics", () => {
      const dialog1 = "wwu-dialog:first-of-type"

      cy.get(dialog1).should("have.attr", "label").and("not.be.empty")
      cy.get(dialog1).should("have.attr", "button").and("not.be.empty")
      cy.get(dialog1).find("dialog").should("have.attr", "role", "dialog").and("have.attr", "aria-modal", "true")
      cy.get(dialog1).find("dialog").should("have.attr", "aria-label").and("not.be.empty")
      cy.get(dialog1).find(".open-button").should("have.text", "Play a Vimeo Video")
    })
    
    it("focus moves to Close button when dialog is opened", () => {
      const dialog3 = "wwu-dialog:last-of-type"

      // when play video is pressed, focus lands on button called "Close"
      cy.get(dialog3).find(".open-button").click()
      cy.get(dialog3).find("dialog").should("be.visible").and("have.attr", "open", "open")
      cy.get(dialog3).find(".close-button").should("include.text", "Close").and("have.focus")
      // when dialog is open, background elements are not focusable
    })
    it("focus returns to opening control when closed", () => {
      const dialog3 = "wwu-dialog:last-of-type"

      // Test setup
      cy.get(dialog3).find(".open-button").click()
      cy.get(dialog3).find("dialog").should("be.visible").and("have.attr", "open", "open")
      cy.get(dialog3).find(".close-button").should("include.text", "Close").and("have.focus")
      
      // when close button is pressed, the dialog is not visible, focus goes to opening button
      cy.get(dialog3).find(".close-button").click()
      cy.get(dialog3).find("dialog").should("be.hidden").and("not.have.attr", "open")
      cy.get(dialog3).find(".open-button").should("have.focus")
    })

    it("when dialog is open, on Esc press focus returns to opening control", () => {
      const dialog3 = "wwu-dialog:last-of-type"

      cy.get(dialog3).find(".open-button").click()
      cy.get(dialog3).find("dialog").should("be.visible").and("have.attr", "open", "open")
      cy.get(dialog3).find(".close-button").should("include.text", "Close").and("have.focus")
      
      if (Cypress.isBrowser("chrome")) {
        cy.get(dialog3).find(".close-button").realPress("Escape")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(dialog3).find(".close-button").type("{esc}")
      }
      cy.get(dialog3).find("dialog").should("be.hidden").and("not.have.attr", "open")
      cy.get(dialog3).find(".open-button").should("have.focus")
    })
  })
})