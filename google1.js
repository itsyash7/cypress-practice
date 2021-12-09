//// <reference types="Cypress" /> 
describe('my first ts', function()
{
    it('my test case',function()
    {

cy.visit(Cypress.env('url')+"/AutomationPractice/")
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => 
{    
    const text=$e1.text()
    if(text.includes("SoapUI"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
        const priceText=   price.text()
         expect(priceText).to.equal('35')
        })
    }
})
cy.get('#openwindow').invoke('removeAttr','target').click()
})
})