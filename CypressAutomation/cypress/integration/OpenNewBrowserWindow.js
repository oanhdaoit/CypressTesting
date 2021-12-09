///<reference types="Cypress"/>
describe('My action',function(){ 
    //Check open new Browser Window (doing)
    it('Handling new Browser Window', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'http://www.qaclickacademy.com/';
            }).as("popup")
        })
        cy.get('button#openwindow').click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h2')
            .should('have.text', 'Featured Courses')
    })    
       //Check open new Browser Window (doing) w2
    it.only('Handling new Browser Window w2', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        const pop_url="http://www.qaclickacademy.com/"
        cy.window().then((win) => {
            const stub = cy.stub(win,'open').as('windowopen')
        })
        cy.get('button#openwindow').click()
        cy.get('@windowopen').should('be.calledWith', pop_url)
    })
    //Test
    // it.only('Window popup'),()=>{
    //     const pop_url ="https://www.youtube.com/c/qaboxletstest/"
    //     cy.window().then(win=> {
    //         const stub = cy.stub(win,'open').as('windowopen')
    //     })
    //     cy.get('button#winpop').click()
    //     cy.get('@windowopen').should('be.calledWith', pop_url)
    //     cy.window().then(win =>{
    //         win.location.href =pop_url
    //         cy.get('input#search').type('abcd')
    //     })
    // }
})