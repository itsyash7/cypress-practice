//// <reference types="Cypress" /> 
//// <reference types="Cypress-iframe" /> 
import 'cypress-iframe'

describe('my first ts', function()
{
    it('my test case',function()
    {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})