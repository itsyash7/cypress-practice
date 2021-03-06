describe("conduit",function()
{
    it("visit url",function()
    {
        cy.visit("https://react-redux.realworld.io/")
        cy.get('.banner').should('have.text', 'conduitA place to share your knowledge.')
    })
    it("click on signup and and verify signup text",function()
    {
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.row').contains("Sign Up")
        cy.get('input[placeholder="Username"]').type('9auhsiausdhfi')
        cy.get('input[placeholder="Email"]').type("wintersummer@gmail")
        cy.get('input[placeholder="Password"]').type("wintersummer@gmail")
        cy.get('.btn').click()
    })
    it("create article and like someones article",function() 
    {
        cy.get('.container > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.error-messages > :nth-child(1)').contains('email has already been taken')
        cy.get(':nth-child(1) > .form-control').type('wintersummer@gmail')
        cy.get(':nth-child(2) > .form-control').type('wintersummer@gmail')
        cy.get('.btn').click()
       cy.get('.ion-compose').click()
       cy.get(':nth-child(1) > .form-control').type("demo17")
       cy.get(':nth-child(2) > .form-control').type("tetsing ")
       cy.get(':nth-child(3) > .form-control').type("cypress tetsing1")
       cy.get(':nth-child(4) > .form-control').type("1234 ")
       cy.get('.btn').click()
      })
   it("verify ",function()
   {
    cy.get('h1').should('have.text','demo17')
    cy.get('p').should('have.text','cypress tetsing1')
   })
})