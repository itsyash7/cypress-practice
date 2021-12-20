

describe("banking transcation ",function()
{
    it("visit url",function()
    {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    })
    it("select manager and create an acc",function()
    {
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.center').should('have.css','font-size','14px')//font size 
        cy.get('[ng-class="btnClass1"]').click()
        cy.get(':nth-child(1) > .form-control').type("patrick")
        cy.get(':nth-child(2) > .form-control').type("shawn")
        cy.get(':nth-child(3) > .form-control').type("007")
        cy.get('form.ng-dirty > .btn').click()
        cy.url().should('contain',"addCust")
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('#userSelect').select("patrick shawn")
        cy.get('#currency').select('Rupee')
        cy.get('form.ng-dirty > button').click()
        cy.get('[ng-class="btnClass3"]').click()
    })
    it("verify acc is created",function()
    {
        cy.get(':nth-child(6) > :nth-child(2)').each(($e1,index,$list)=>
        {
            const ctext=$e1.text();
            if(ctext.includes("shawn"))
            {
                cy.get(':nth-child(6) > :nth-child(2)').eq(index).next().then(function(Cust)
                {
                    const Custtext=Cust.text();
                    expect(Custtext).to.equal("007");//verified
                })
           }
        })
      
    })
     it("withdraw money and verify error",function()
    {
        cy.get('.home').click()
       cy.url().should('contain','login')
       cy.get('.borderM > :nth-child(1) > .btn').click()
       cy.get('#userSelect').select("patrick shawn")
       cy.get('form.ng-valid > .btn').click()
       cy.get('.borderM > :nth-child(3)').contains(' Balance : 0 ')//verify bal is 0 
       //and try to withdraw 100 it should throw error message 
       cy.get('[ng-class="btnClass3"]').click()
       cy.get('.form-control').type('100')
       cy.get('form.ng-dirty > .btn').click()
       cy.get('.error').should('contain','Transaction Failed. You can not withdraw amount more than the balance.')
    })
})