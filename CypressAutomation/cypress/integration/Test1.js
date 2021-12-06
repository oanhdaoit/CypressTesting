///<reference types="Cypress" />
describe('My first demo test', function()
{

it('Open URL and searching',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input.search-keyword').type('be')
        cy.wait(2000)
        //product location can be used anytime
        cy.get('.products').as('productloaction')
        //Find child chaining
        cy.get('@productloaction').find('.product').should('have.length',5)
        //Click the add to cart button on the third product
        cy.get('@productloaction').find('.product').eq(2).contains('ADD TO CART').click().then(function()
            {
                console.log('sf')
            }
        )

        
        // Click on product with name "abc"
        cy.get('.products').find('.product').each(($el, index, $list)=>{
            const Varleg= $el.find('h4.product-name').text()
                if(Varleg.includes('Beans')){
                    //$el.find('button').click()
                    cy.wrap($el).find('button').click()
                }
            }
        ) 
        //check logo display right
        cy.get('.brand').should('have.text','GREENKART')
        //Take text from logo
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })  
    } 
)


} )

