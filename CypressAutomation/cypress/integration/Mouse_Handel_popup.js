///<reference types="Cypress"/>
describe('My action',function(){ 
    //Check value 1 row of table
    it('Check mouse handel popup', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('div.mouse-hover-content').invoke('show')
        // cy.contains('Top').click()
        // cy.url().should('include','top')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })    
})