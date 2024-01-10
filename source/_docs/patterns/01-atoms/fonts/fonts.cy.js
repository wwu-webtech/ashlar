describe('atoms: fonts', () => {
  beforeEach(() => {
    cy.visit('/patterns/atoms/fonts')
  })

  context('automated accessibility tests', () => {
    it('passes axe core accessibility tests', () => {
      cy.injectAxe()
      cy.checkA11y('.theme-doc-markdown')
    })
  })
})