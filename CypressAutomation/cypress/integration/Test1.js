///<reference types="Cypress" />
describe('My first demo test', function()
{

it('Open URL and searching',function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('input.search-keyword').type('be')
    cy.wait(2000)
    cy.get('.products-wrapper .product-name').should('have.length',5)
} )


} )

