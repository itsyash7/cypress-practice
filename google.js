//// <reference types="Cypress" /> 
describe('my first ts', function()
{
    it('my test case',function()
    {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption3').check().should('be.checked')
cy.get('#dropdown-class-example').select('Option3')
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item-wrapper').each(($e1, index, $list) => {
    
    if($e1.text()==="India")
{
    $e1.click()
}
} )
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('[value="radio2"]').check()
    } )

}
)