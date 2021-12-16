

describe('book my show',function()
{
    it('visiturl',function()
    {
        cy.visit('https://in.bookmyshow.com/')
        cy.wait(2000)
        cy.get('#wzrk-cancel').click()
    })
    it('select cities',function()
    {
    cy.get(':nth-child(3) > .sc-iCwjlJ').click()
    cy.get('.sc-hMrMfs').click() 
cy.contains('Pune').click()
cy.get(':nth-child(3) > .sc-133848s-11 > .sc-dv5ht7-0 > .sc-133848s-3 > :nth-child(1) > .sc-7o7nez-0').click()
cy.get('.fefjxW > .sc-8f9mtj-0 > span').click()
cy.get('.sc-jKJlTe').should('have.text','Get Started')
cy.go('back')
cy.get(':nth-child(1) > .sc-133848s-11 > .sc-dv5ht7-0 > .sc-133848s-3 > :nth-child(1) > .sc-7o7nez-0').click()
cy.get('.sc-qswwm9-8 > #page-cta-container > .sc-8f9mtj-0 > .sc-1vmod7e-2').click()
cy.get('.sc-qswwm9-2').contains("Spider-Man: No Way Home")
cy.get('.sc-vhz3gb-2 > :nth-child(4) > span').click()
cy.get('[data-slick-index="3"]').click()
cy.get(':nth-child(1) > .showtime-pill').click()
cy.get('#btnPopupAccept').click()
cy.get('#pop_1').click({force:true})
cy.xpath("//tbody/tr[24]/td[2]/div[6]/a[1]").click()
cy.get('#btnSTotal_reserve').click()
cy.get('#prePay').click()
cy.get('#seatErr').should('have.text',"Please select ticket type")
cy.xpath("//body/section[@id='seat-layout']/div[3]/section[2]/div[3]/div[1]/div[3]/div[2]/label[1]").click()
cy.get('#prePay').click()
cy.get('#txtEmail').type('idjidjidj')
cy.get('#txtMobile').type('545132132')
cy.get('#dContinueContactSec > .btn').click()
cy.get('#errDiv_Email').should('have.text',"Please enter a valid email address.")



    })
    
})