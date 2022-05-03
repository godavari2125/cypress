

describe("verify valid login credntial and invalid login credential",()=>{
    beforeEach(function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/dashboard")
    })
    it("verify valid login cradential",()=>{
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('[href="http://www.orangehrm.com/"] > img').should("be.visible")
    })
    it("verify invalid credential for login ",()=>{
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type('admin')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should("have.text",'Invalid credentials')
    })
})