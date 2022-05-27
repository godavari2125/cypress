///<reference types = "cypress"/>
describe('API testing with alias',()=>{
    beforeEach(function(){
        cy.request({
            method: "GET",
            url:"https://reqres.in/api/users?page=2"
        }).as('pageWiseUser')
    })
    it('validate the status',()=>{
        cy.get('@pageWiseUser').its('status').should('equal',200)
    })
})