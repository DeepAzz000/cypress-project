import {Config} from './state';

describe('Login', () => {

    // Login

it('#KT013 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type(Config.phone)
    cy.get('#next_phone_number_verification').click()
    cy.get('#password_phone_exists').type(Config.password)
    cy.get('#connexionIfPhoneExistsButton').click()
    cy.get('#error').should('not.exist')
    })

    it('#KT014 passes', () => {
    cy.visit('https://www.kezakoo.com/')
    cy.contains('Inscription').click()
    cy.get('#phone').type(Config.phone)
    cy.get('#next_phone_number_verification').click()
    cy.get('#password_phone_exists').type(Config.wrong_password)
    cy.get('#connexionIfPhoneExistsButton').click()
    cy.get('#error').should('exist')
    })
})