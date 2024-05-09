import { runAutoA11yTests } from "../../../cypress/support/global"

describe('atoms: fonts', () => {
  beforeEach(() => {
    cy.visit('/patterns/atoms/fonts')
  })

  runAutoA11yTests();
})