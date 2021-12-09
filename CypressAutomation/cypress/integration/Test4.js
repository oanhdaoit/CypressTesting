///<reference types="Cypress"/>
describe('My action',function(){
    it('Open URL and click on checkbox',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Check checkbox is checked and value
        cy.get('input[name="checkBoxOption1"]').check().should('be.checked').and('have.value','option1')
        cy.get('input[name="checkBoxOption1"]').uncheck().should('not.be.checked')
        //Check with value ="option2,3"
        cy.get('input[type=checkbox]').check(['option3','option2'])
        //Choose static dropdown
        cy.get('select').select('option3').should('have.value','option3')
        //Choose Dynamic dropdown way 1
        cy.get('input[id="autocomplete"]').type('ab')
        cy.wait(2000)
        cy.get('ul[class*="autocomplete"]').find('li').each(($el, index, $list) => {
        const textVeg=$el.find('div[class*="item"]').text()
            if(textVeg.includes('Syrian Arab Republic'))
            {
                cy.wrap($el).click()
            }
        })
        //Choose Dynamic dropdown way 2
        cy.wait(4000)  
        cy.get('input[id="autocomplete"]').clear()
        cy.get('input[id="autocomplete"]').type('zi')
        cy.wait(2000)      
        cy.get('ul[class*="autocomplete"] li div[class*="item"]').each(($el, index, $list) => {
            // condition matching check
            if($el.text() ==="Zimbabwe"){   
                cy.wrap($el).click()
            }
        })
        cy.get('input[id="autocomplete"]').should('have.value','Zimbabwe')
    })
    //Check element show or not
    it('Check Hide and show element case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[name=show-hide]').should('be.visible')
        cy.get('input[onclick="hideElement()"]').click()
        cy.get('input[name=show-hide]').should('not.be.visible')
        cy.get('input[onclick="showElement()"]').click()
        cy.get('input[name=show-hide]').should('be.visible')
    })
    //Check Radio button
    it('Check radio button case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[name=radioButton]').check(['radio2']).should('be.checked')
        //or 
        cy.get('[value="radio2"]').check().should('be.checked')
    })
    //Check content alert: cypress auto accept alert
    it('check alert',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[id*="alert"]').click()
        //windown: alert 
        cy.on('window:alert',(str)=>{
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.wait(3000)
        cy.get('input[value*="Confirm"]').click()
        cy.on('window:confirm',(str)=>{
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    //Check open other tab (switch tab)
    it('check open new tab',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('a#opentab').invoke('removeAttr', 'target').click()
        
        cy.url()
            .should('include', '/index')
        cy.get('div.slide a')
            .should('have.text', 'JOIN NOW')
        cy.go("back")            
    })   
    
})