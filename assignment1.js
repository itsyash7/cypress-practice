describe('booking of an appoitment' ,function()
{
it("vist the url",function()
{
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
})
it("click on login",function()
{
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
})
it('fill the details',function()
{
    cy.get('select').select('Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').check()
    cy.get('#radio_program_none').check()
    cy.get('#txt_visit_date').type('22/12/2021')
    cy.get('#txt_comment').click({force:true})
    cy.get('#txt_comment').type("lets fix an meeting")
    cy.get('#btn-book-appointment').click()
})
it('verfying details',function()
{
    cy.get('h2').contains("Appointment Confirmation")
    cy.get('#visit_date').contains('22/12/2021')
})
})