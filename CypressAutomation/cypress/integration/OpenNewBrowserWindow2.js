///<reference types="Cypress"/>
describe('My action',function(){ 
    //Check open new Browser Window 
    //Test
    it('Switch Tab Example',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el){
            const url =el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})