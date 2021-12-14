///<reference types="Cypress" />

describe('My first demo test', function()
{ 
    beforeEach(function() {
        // runs once before all tests
        cy.fixture('Signin').then(function(data)
        {
            this.data=data
        })
    })
    it('Check content input',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('form input[name ="name"]').type(this.data.name)
        cy.get('select').select(this.data.gender)
        //compare the input field and another field
        cy.get('input:not(.form-control)[name*="name"]').should('have.value',this.data.name)
        //check validation (min)
        cy.get('form input[name ="name"]').should('have.attr','minlength','2')
        //check button disable or not
        cy.get('input#inlineRadio3').should('be.disabled')
        cy.get('li a[href*="/shop"]').click()
        cy.SelectProduct('Blackberry')
        cy.SelectProduct('Nokia Edge')
    })
} )

