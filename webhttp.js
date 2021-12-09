//// <reference types="Cypress" /> \
describe('my https mocking',function()
{
it('mt test case',function()
{
cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
cy.intercept({
    method: 'GET',
    url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
 },
 {
     statusCode: 200,
     body: [
        {
            "book_name": "RestAssured with Java",
            "isbn": "RSU",
            "aisle": "2301"
        },
        {
            "book_name": "RestAssured with Java",
            "isbn": "BSG",
            "aisle": "2302"
        },
        {
            "book_name": "RestAssured with Java",
            "isbn": "LSA",
            "aisle": "2303"
        },
        {
            "book_name": "RestAssured with Java",
            "isbn": "DSR",
            "aisle": "2304"
        },
        {
            "book_name": "RestAssured with Java",
            "isbn": "RCD",
            "aisle": "2305"
        },
        ]
}).as('bookretrivals')
cy.get('.btn-primary').click()
cy.wait('@bookretrivals').should(({request,response})=>
{
    cy.get('tr').should('have.length',response.body.length+1)
})
cy.get('p').should('have.text','Oops only 6 Book available')
})
})