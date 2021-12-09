/// <referance types="Cypress" />
describe("my test script", function()
{
    it("my test video", function()
    {
        cy.visit('https://hrms.synerzip.in/symfony/web/index.php/pim/viewMyDetails');
        cy.get('#txtUsername').type('yash.shaha')
        cy.get('#txtPassword').type('@***')
        cy.get('#btn-login').click()

    }
    )
})