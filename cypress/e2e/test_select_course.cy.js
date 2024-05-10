import {Config} from './state';

describe('Select Course', () => {

    // select course

it('#KT015 passes', () => {
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