/// <referance types="Cypress" />
describe("amazon test suite", function()
{
    it("test case",function()
    {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type("laptop")
        cy.get('#nav-search-submit-button').click()
        cy.get('#p_89\/HP > .a-list-item > .a-link-normal > .a-checkbox > label').check()
    }    
    )
}
)