describe('handling web table',function()
{
    it('visit the url' , function()
    {
        cy.visit('https://demo.opencart.com/admin/')
      cy.url().should('contain',"admin")
         })
         it("enter mail and number", function()
         {
         cy.get('#input-username').type('yoo')
         cy.get('#input-password').type('yoo')
         cy.get('.btn').click()
         cy.get(':nth-child(1) > .tile > .tile-footer > a').click()
         })
         it('handling web tables',function()
         {
         //checking value presence anywhere in the table
         cy.get('.col-md-9 > .panel > .panel-body').should('contain',"Alexey Melnik").should('be.visible')

         //checking value presence particularly in the column
         cy.get(':nth-child(7) > :nth-child(5)').should('have.text',"$105.00")

         //verifying customer Anna-Maria Chebupelly whose id is 14402	
         cy.get(':nth-child(9) > :nth-child(3)').each(($e1,index,$list)=>
         {
             const text=$e1.text()
             if(text.includes("Anna-Maria Chebupelly "))
             {
                 cy.get('tbody > :nth-child(9) > :nth-child(2)').eq(index).then(function(cname)
                 {
                     const orderid=orderid.text()
                     expect(orderid).to.equal('14402')
                 })
            
            }
         })
         //try to edit the order history and it should not allow it to do
         cy.get(':nth-child(11) > :nth-child(8) > [style="min-width: 120px;"] > .btn-group > a.btn').click()
         cy.get('.btn').click()
         cy.xpath("//td[contains(text(),'345345345435')]").should('contain',"345345345435")
         cy.get('#input-order-status').select("Failed")
         cy.get('#input-notify').check().should('be.checked')
         cy.get('#input-comment').type("didn't picked the call")
         cy.get('#button-history').click()
         cy.get('.alert').should('contain'," Warning: You do not have permission to access the API!")
         cy.get('tbody > :nth-child(3) > :nth-child(2) > a').should('have.css', 'color', 'rgb(30, 145, 207)')
        

         })
})