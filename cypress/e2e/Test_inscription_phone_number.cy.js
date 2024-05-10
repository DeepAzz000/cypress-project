describe('Inscription Phone_number', () => {

//Phone registration 
  it('#KT001 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('061234567891234')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

it('#KT002 passes', () => {
  cy.visit('https://www.kezakoo.com/')
  cy.contains('Inscription').click()
  cy.get('#phone').type('0612346879')
  cy.get('#next_phone_number_verification').click()
  cy.get('#error').should('not.exist')
})

  it('#KT003 passes', () => {
    cy.visit('https://www.kezakoo.com/')    
    cy.contains('Inscription').click()
    cy.get('#phone').type('phonenumber')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

    it('#KT004 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212612345870')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('not.exist')
  })

  it('#KT005 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+2126123456789123')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

  it('#KT006 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type(' ')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

// Registration Process

it('#KT007 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212610305070')
    cy.get('#next_phone_number_verification').click()
    cy.get('.langue:nth-child(2)').click();
    cy.get('#next_ed_infos_language_signup').click()
    cy.get('#ed_infos_biof_signup > .niveau:nth-child(2)').click();
    cy.get('#next_ed_infos_biof_signup').click();
    cy.get('#ed_infos_filiere_biof_tronc').click();
    cy.get('#ed_infos_filiere_biof_tronc > .filiere_tronc:nth-child(2)').click();
    cy.get('#next_ed_infos_filiere_biof_tronc').click();
    cy.get('#email').type('soxiro2316@losvtn.com')
    cy.get('#password').type('+212610213954') 
    cy.get('#first_name').type('Tester')
    cy.get('#last_name').type('Testery')
    cy.get('#ville').type('Oujda')
    cy.get('#submitbtn').click()
    cy.get('#error').should('not.exist')
    })

  it('#KT008 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212613203016')
    cy.get('#next_phone_number_verification').click()
    cy.get('.langue:nth-child(2)').click();
    cy.get('#next_ed_infos_language_signup').click()
    cy.get('#ed_infos_biof_signup > .niveau:nth-child(2)').click();
    cy.get('#next_ed_infos_biof_signup').click();
    cy.get('#ed_infos_filiere_biof_tronc').click();
    cy.get('#ed_infos_filiere_biof_tronc > .filiere_tronc:nth-child(2)').click();
    cy.get('#next_ed_infos_filiere_biof_tronc').click();
    cy.get('#email').type('testerjkjlkjlkj')
    cy.get('#password').type('+212610213050') 
    cy.get('#first_name').type('Tester')
    cy.get('#last_name').type('Testery')
    cy.get('#ville').type('Oujda')
    cy.get('#submitbtn').click()
    cy.get('#error').should('exist')
  })

  it('#KT009 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212630209010')
    cy.get('#next_phone_number_verification').click()
    cy.get('.langue:nth-child(2)').click();
    cy.get('#next_ed_infos_language_signup').click()
    cy.get('#ed_infos_biof_signup > .niveau:nth-child(2)').click();
    cy.get('#next_ed_infos_biof_signup').click();
    cy.get('#ed_infos_filiere_biof_tronc').click();
    cy.get('#ed_infos_filiere_biof_tronc > .filiere_tronc:nth-child(2)').click();
    cy.get('#next_ed_infos_filiere_biof_tronc').click();
    cy.get('#email').type('tester@examplecom')
    cy.get('#password').type('+212610213050') 
    cy.get('#first_name').type('Tester')
    cy.get('#last_name').type('Testery')
    cy.get('#ville').type('Oujda')
    cy.get('#submitbtn').click()
    cy.get('#error').should('exist')
  })

  it('#KT010 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212611213050')
    cy.get('#next_phone_number_verification').click()
    cy.get('.langue:nth-child(2)').click();
    cy.get('#next_ed_infos_language_signup').click()
    cy.get('#ed_infos_biof_signup > .niveau:nth-child(2)').click();
    cy.get('#next_ed_infos_biof_signup').click();
    cy.get('#ed_infos_filiere_biof_tronc').click();
    cy.get('#ed_infos_filiere_biof_tronc > .filiere_tronc:nth-child(2)').click();
    cy.get('#next_ed_infos_filiere_biof_tronc').click();
    cy.get('#email').type('+212610213050')
    cy.get('#password').type('+212610213050')
    cy.get('#first_name').type('+212610213050') 
    cy.get('#last_name').type('+212610213050') 
    cy.get('#ville').type('Oujda')
    cy.get('#submitbtn').click()
    cy.get('#error').should('exist')
  })

  it('#KT011 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212612346878')
    cy.get('#next_phone_number_verification').click()
    cy.get('.langue:nth-child(2)').click();
    cy.get('#next_ed_infos_language_signup').click()
    cy.get('#ed_infos_biof_signup > .niveau:nth-child(2)').click();
    cy.get('#next_ed_infos_biof_signup').click();
    cy.get('#ed_infos_filiere_biof_tronc').click();
    cy.get('#ed_infos_filiere_biof_tronc > .filiere_tronc:nth-child(2)').click();
    cy.get('#next_ed_infos_filiere_biof_tronc').click();
    cy.get('#email').type('tester@example.com')
    cy.get('#password').type('+212610213050') 
    cy.get('#first_name').type('+212610213050') //Shouldn't allow first name as a number 
    cy.get('#last_name').type('+212610213050') //Shouldn't allow last name as a number 
    cy.get('#ville').type('Oujda')
    cy.get('#submitbtn').click()
    cy.get('#error').should('exist')
  })
  
  it('#KT012 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212712345876')
    cy.get('#next_phone_number_verification').click()
    cy.get('.langue:nth-child(2)').click();
    cy.get('#next_ed_infos_language_signup').click()
    cy.get('#ed_infos_biof_signup > .niveau:nth-child(2)').click();
    cy.get('#next_ed_infos_biof_signup').click();
    cy.get('#ed_infos_filiere_biof_tronc').click();
    cy.get('#ed_infos_filiere_biof_tronc > .filiere_tronc:nth-child(2)').click();
    cy.get('#next_ed_infos_filiere_biof_tronc').click();
    cy.get('#email').type('tester@example.com')
    cy.get('#password').type('+212610213050') 
    cy.get('#first_name').type('Tester')
    cy.get('#last_name').type('Testery')
    cy.get('#ville').type('Oujd') // Shouldn't let user input wrong city
    cy.get('#submitbtn').click()
    cy.get('#error').should('exist')
  })

})