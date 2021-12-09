///<reference types="Cypress"/>
describe('My action',function(){ 
    //Check value 1 row of table
    it('Check data at table', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
        const text=$el.text()
        if(text.includes("Python Language"))
        {
//compare the row with value is 25
            cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }


        })
   
    })    
})