/// <reference types="Cypress" />
 
describe('My Addtocart Test Suite', function() 
{
 
it('My Add to cart case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//selenium get hit url in browser, cypress get acts like findElement of selenium
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
//Parent child chaining
cy.get('.products').as('productLocator')

 
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
    cy.wrap($el).find('button').click()
}
})
cy.wait(2000)
cy.get('.cart-icon').click()
cy.wait(2000)
cy.get('div.cart-preview button').click()
cy.wait(2000)
cy.contains('Place Order').click()
cy.wait(2000)
//cy.get('div.products select').click()
}  )
 
 
 
}  )