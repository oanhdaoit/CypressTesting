///<reference types="Cypress"/>

// const { data } = require("cypress/types/jquery")

describe('My action',function(){ 
    beforeEach(function() {
        // runs once before all tests
        cy.fixture('Create_Service').then(function(data)
        {
            this.data=data
        })
    })
    //Check open new Browser Window 
    it('Open the Create Service account Page',function(){
        cy.visit('https://localhost:44302/')
        cy.get('div[class*="navigation"]').as('productLocator')
        cy.get('@productLocator').find('div.card').each(($el, index, $list) => {
 
            const textVeg=$el.find('p.card__text').text()
            if(textVeg.includes('Service account'))
            {
                cy.wrap($el).find('p').click()
            }
        })
        cy.url()
        .should('include', '/create-service-account')
    })
    it('Create Service account ',function(){
        cy.get('div.form-field input[name*="Cn"]').type(this.data.commonname)
        cy.get('div.form-field input[name*="LastName"]').type(this.data.firstname)
        cy.get('div.form-field input[name*="FirstName"]').type(this.data.lastname)
        cy.get('div.form-field input[name*="Mail"]').type(this.data.email)
        cy.get('button#submitBtn').click()
        cy.get('div.notification__body')
            .should('have.text', 'Form object has been submitted successfully.')
        cy.url()
            .should('include', '/users/dashboard')
    })
})