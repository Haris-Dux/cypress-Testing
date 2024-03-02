
describe('forms tests',() => {
    beforeEach(()=>{
        cy.visit('forms')
      })
    it('test email sending',() => {
       cy.contains(/Testing Forms/i)
       cy.getTestData('email').find('input').type('haris@gmail.com')
       cy.contains(/Successfully subbed: haris@gmail.com/i).should('not.exist')
       cy.getTestData('email-sending').click()
       cy.contains(/Successfully subbed: haris@gmail.com/i).should('exist')
    })
})