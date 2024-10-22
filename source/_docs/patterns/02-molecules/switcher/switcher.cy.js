import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: switcher", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/switcher")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();

  context('manual accessibility tests', () => {
    it('wwu-switcher follows ARIA semantics', () => {
      for (let switcher of "wwu-switcher:first-of-type .switcher") {
        cy.get(switcher).should("have.attr", "role", "tablist")
        cy.get(switcher).should("have.attr", "aria-label").and("not.be.empty")
        cy.get(switcher).find("button").should("have.attr", "role", "button").and("have.attr", "aria-controls").and("have.id")
        cy.get(switcher).find("button.active").should("have.attr", "aria-selected", "true").and("not.have.attr", "tabindex")
        cy.get(switcher).find("button:not(.active)").should("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      }

      for (let switcher_panel of "wwu-switcher:first-of-type .switcher-container") {
        cy.get(switcher_panel).find("div").should("have.attr", "role", "tabpanel").and("have.attr", "tabindex", "0")
      }
      cy.get(switcher_panel).first().should("have.attr", "aria-labelledby").should("match", ".wwu-switcher:first .switcher button:first-child[id]")
      cy.get(switcher_panel).first().next().should("have.attr", "aria-labelledby").should("match", ".wwu-switcher:first .switcher button:first-child + button[id]")
      cy.get(switcher_panel).last().should("have.attr", "aria-labelledby").should("match", ".wwu-switcher:first .switcher button:last-child[id]")

      cy.get("wwu-switcher:not([layout='column']) .switcher").should("have.attr", "aria-orientation", "horizontal")
      cy.get("wwu-switcher[layout='column'] .switcher").should("have.attr", "aria-orientation", "vertical")
    })

    it('on click, the related panel for the tab control shows up', () => {
      const switchertab_1 = "wwu-switcher:first-of-type .switcher button:first"
      const switcherpanel_1 = "wwu-switcher:first-of-type .switcher-container div:first"
      
      cy.get(switcherpanel_1).should("be.visible")
      cy.get(switchertab_1).focus()
      cy.get(switchertab_1).next("button").click()
      cy.get(switchertab_1).should("not.have.class", "active").and("has.attr", "selected", "false").and("has.attr", "tabindex", "-1")
      cy.get(switcherpanel_1).should("be.hidden").and("not.have.class", "active")
      cy.get(switcherpanel_1).next("div").should("be.visible").and("have.class", "active")
      cy.get(switchertab_1).next("button").should("have.class", "active").and("have.attr", "aria-selected", "true")
    })

    it('right and left arrow keys move focus between tabs in horizontal switcher', () => {
      const switchertab_1 = "wwu-switcher:first-of-type .switcher button:first"
      const switcherpanel_1 = "wwu-switcher:first-of-type .switcher-container div:first"
      const switchertab_3 = "wwu-switcher:first-of-type .switcher button:last"
      const switcherpanel_3 = "wwu-switcher:first-of-type .switcher-container div:last"

      cy.get(switcherpanel_1).should("be.visible")
      cy.get(switchertab_1).focus()
      if (Cypress.isBrowser("chrome")) {
        cy.get(switchertab_1).realPress("ArrowRight")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(switchertab_1).type("{rightArrow}")
      }
      cy.get(switchertab_1).should("not.have.class", "active").and("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      cy.get(switcherpanel_1).should("be.hidden").and("not.have.class", "active")
      cy.get(switchertab_1).next("button").should("have.focus").and("have.class", "active").and("have.attr", "aria-selected", "true")
      cy.get(switcherpanel_1).next("div").should("be.visible").and("have.class", "active")
      
      // cycle through to tab 1, should get focus after right key
      cy.get(switchertab_3).focus().click()
      cy.get(switcherpanel_3).should("be.visible")
      if (Cypress.isBrowser("chrome")) {
        cy.get(switchertab_3).realPress("ArrowRight")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(switchertab_3).type("{rightArrow}")
      }
      cy.get(switchertab_3).should("not.have.class", "active").and("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      cy.get(switcherpanel_3).should("be.hidden").and("not.have.class", "active")
      cy.get(switchertab_1).should("have.focus").and("have.class", "active").and("have.attr", "aria-selected", "true")
      cy.get(switcherpanel_1).should("be.visible").and("have.class", "active")
      
      // reverse for left arrow
      cy.get(switchertab_3).focus().click()
      cy.get(switcherpanel_3).should("be.visible")
      if (Cypress.isBrowser("chrome")) {
        cy.get(switchertab_3).realPress("ArrowLeft")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(switchertab_3).type("{leftArrow}")
      }
      cy.get(switchertab_3).should("not.have.class", "active").and("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      cy.get(switcherpanel_3).should("be.hidden").and("not.have.class", "active")
      cy.get(switchertab_3).prev("button").should("have.focus").and("have.class", "active").and("have.attr", "aria-selected", "true")
      cy.get(switcherpanel_3).prev("div").should("be.visible").and("have.class", "active")
    })
    
    it('up and down arrow keys move focus between tabs in vertical switcher', () => {
      // vertical: focus on tab 1, press down arrow - tab 2 now focused
      const switchertab_1 = "wwu-switcher:last-of-type .switcher button:first"
      const switcherpanel_1 = "wwu-switcher:last-of-type .switcher-container div:first"
      const switchertab_3 = "wwu-switcher:last-of-type .switcher button:last"
      const switcherpanel_3 = "wwu-switcher:last-of-type .switcher-container div:last"
      
      cy.get(switcherpanel_1).should("be.visible")
      cy.get(switchertab_1).focus()
      if (Cypress.isBrowser("chrome")) {
        cy.get(switchertab_1).realPress("ArrowDown")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(switchertab_1).type("{downArrow}")
      }
      cy.get(switchertab_1).should("not.have.class", "active").and("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      cy.get(switcherpanel_1).should("be.hidden").and("not.have.class", "active")
      cy.get(switchertab_1).next("button").should("have.focus").and("have.class", "active").and("have.attr", "aria-selected", "true")
      cy.get(switcherpanel_1).next("div").should("be.visible").and("have.class", "active")

      // cycle through to tab 1, should get focus after down key
      cy.get(switchertab_3).focus().click()
      cy.get(switcherpanel_3).should("be.visible")
      if (Cypress.isBrowser("chrome")) {
        cy.get(switchertab_3).realPress("ArrowDown")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(switchertab_3).type("{downArrow}")
      }
      cy.get(switchertab_3).should("not.have.class", "active").and("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      cy.get(switcherpanel_3).should("be.hidden").and("not.have.class", "active")
      cy.get(switchertab_1).should("have.focus").and("have.class", "active").and("have.attr", "aria-selected", "true")
      cy.get(switcherpanel_1).should("be.visible").and("have.class", "active")
      
      // reverse for up arrow
      cy.get(switchertab_3).focus().click()
      cy.get(switcherpanel_3).should("be.visible")
      if (Cypress.isBrowser("chrome")) {
        cy.get(switchertab_3).realPress("ArrowUp")
      }
      if (Cypress.isBrowser("!chrome")) {
        cy.get(switchertab_3).type("{upArrow}")
      }
      cy.get(switchertab_3).should("not.have.class", "active").and("have.attr", "aria-selected", "false").and("have.attr", "tabindex", "-1")
      cy.get(switcherpanel_3).should("be.hidden").and("not.have.class", "active")
      cy.get(switchertab_3).prev("button").should("have.focus").and("have.class", "active").and("have.attr", "aria-selected", "true")
      cy.get(switcherpanel_3).prev("div").should("be.visible").and("have.class", "active") 
    })
  })
})