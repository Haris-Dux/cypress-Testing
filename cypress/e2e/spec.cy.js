describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('overview')
  })

  it('contains header text', () => {
    cy.visit('fundamentals')
    cy.getTestData('header').contains(/Testing Fundamentals/i)
    
  })

  it('should be visible on click', () => {
    cy.visit('fundamentals')
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-test="accordions-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordions-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })

});