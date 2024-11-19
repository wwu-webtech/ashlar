import { runAutoA11yTests } from "../../../cypress/support/global"

describe("molecule: background video", () => {
  beforeEach(() => {
    cy.visit("/patterns/molecules/background-video")
    cy.get(".theme-doc-markdown").should("be.visible")
  })

  runAutoA11yTests();

  context("manual accessibility tests", () => {
    it("wwu-background-video should have alt attribute value", () => {
      cy.get("wwu-background-video").should("have.attr", "alt").and("not.be.empty")
    })

    it("when pause button is focused and pressed, the video pauses", () => {
      cy.get('wwu-background-video video').its('0.paused').should('equal', false)
      cy.get("wwu-background-video .playback").focus().click()
      cy.get('wwu-background-video video').its('0.paused').should('equal', true)
      cy.get("wwu-background-video .playback").contains("Play").should("have.class", "playback")
    })

    it("when play button is focused and pressed, the video plays", () => {
      // Test setup
      cy.get('wwu-background-video video').its('0.paused').should('equal', false)
      cy.get("wwu-background-video .playback").focus().click()
      cy.get('wwu-background-video video').its('0.paused').should('equal', true)
      cy.get("wwu-background-video .playback").contains("Play").should("have.class", "playback")
      // run test
      cy.get("wwu-background-video .playback").focus().click()
      cy.get('wwu-background-video video').its('0.paused').should('equal', false)
      cy.get("wwu-background-video .playback").contains("Pause").should("have.class", "playback play")
    })
  })
})