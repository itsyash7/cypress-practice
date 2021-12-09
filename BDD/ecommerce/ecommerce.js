//// <reference types="Cypress" /> 

import Homepage from '../../../../support/pageobject/Homepage'
import Shop from '../../../../support/pageobject/Shop'
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const homepage=new Homepage()
const shop=new Shop()

Given ('i open ecommerce page',()=>
{
cy.visit(Cypress.env('url')+"/angularpractice/")
})
When('i added items to cart',()=>
{
    cy.get(':nth-child(2) > .nav-link').click()
    cy.selectProduct('Blackberry')
    cy.selectProduct('Blackberry')
    shop.getCheckout().click()
})
Then('select the country submit and verify thankyou',()=>
{
    cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
    cy.get('#country').type('india')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox').click()
    cy.get('.ng-untouched > .btn').click()
})
When('i fill the form',function(dataTable)
{
    homepage.getNamebox().type(dataTable.rawTable[1][0]) 
    homepage.getEmail().type(this.data.email)
    homepage.getPassword().type(this.data.pass )
    cy.get('#exampleCheck1').check().should('be.checked')
    homepage.getGender().select(dataTable.rawTable[1][1])
})
Then ('validate the form',()=>
{
    cy.get('#inlineRadio2').click()
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get(':nth-child(2) > .nav-link').click()
})

