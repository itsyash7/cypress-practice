//// <reference types="Cypress" /> \

import Homepage from '../../support/pageobject/Homepage'
import Shop from '../../support/pageobject/Shop'
describe('my first ts', function()
{
    before(function() {
        cy.fixture('example').then(function(data)
    {
        this.data=data
    })
    })
    it('my test case',function()
    {
      const homepage=new Homepage()
      const shop=new Shop()
    cy.visit(Cypress.env('url')+"/angularpractice/")
    homepage.getNamebox().type(this.data.name) 
        homepage.getEmail().type(this.data.email)
        homepage.getPassword().type(this.data.pass )
        cy.get('#exampleCheck1').check().should('be.checked')
        homepage.getGender().select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
       cy.selectProduct('Blackberry')
       cy.selectProduct('Blackberry')
       shop.getCheckout().click()
       cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
       cy.get('#country').type('india')
       cy.get('.suggestions > ul > li > a').click()
       cy.get('.checkbox').click()
       cy.get('.ng-untouched > .btn').click()
    })
})
