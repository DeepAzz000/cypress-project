describe('Inscription Phone_number', () => {
  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('061020304050')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('0610203040')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('not.exist')
  })

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')    
    cy.contains('Inscription').click()
    cy.get('#phone').type('phonenumber')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

    it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212610203040')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('not.exist')
  })

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+21261020304050')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

})
