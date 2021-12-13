///<reference types="Cypress"/>
///<reference types="Cypress-iframe"/>
import 'cypress-iframe'
describe('iframe Test',function(){
    it.only('Mouse Hover',function() {
 
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
        })
    //Test on iframe 
    it('Demo',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})