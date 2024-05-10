import {Config} from './state';

describe('Inscription Phone_number', () => {

//Phone registration 
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

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('')
    cy.get('#next_phone_number_verification').click()
    cy.get('#error').should('exist')
  })

// Registration Process

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212610213050')
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

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212610213050')
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

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type('+212610203090')
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

    it('passes', () => {
      cy.visit('https://www.kezakoo.com/')
      cy.contains('Inscription').click()
      cy.get('#phone').type('+212610203010')
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

    it('passes', () => {
      cy.visit('https://www.kezakoo.com/')
      cy.contains('Inscription').click()
      cy.get('#phone').type('+212610203010')
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

    it('passes', () => {
      cy.visit('https://www.kezakoo.com/')
      cy.contains('Inscription').click()
      cy.get('#phone').type('+212611111116')
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

// Login

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type(Config.phone)
    cy.get('#next_phone_number_verification').click()
    cy.get('#password_phone_exists').type(Config.password)
    cy.get('#connexionIfPhoneExistsButton').click()
    cy.get('#error').should('not.exist')
  })

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type(Config.phone)
    cy.get('#next_phone_number_verification').click()
    cy.get('#password_phone_exists').type(Config.wrong_password)
    cy.get('#connexionIfPhoneExistsButton').click()
    cy.get('#error').should('exist')
  })

// select course

  it('passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type(Config.phone)
    cy.get('#next_phone_number_verification').click()
    cy.get('#password_phone_exists').type(Config.password)
    cy.get('#connexionIfPhoneExistsButton').click()
    cy.contains('Mes Cours').click()
    cy.get("#SVT").find('button').click()
    cy.get("#lesson-102029").find('button').click()
    cy.get("#learndash_post_102029").click()
  })


})