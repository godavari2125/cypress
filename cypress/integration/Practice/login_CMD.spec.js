describe("verify valid login credntial and invalid login credential",()=>{
    
    it("verify valid login cradential",()=>{
        // cy.get('#txtUsername').type("Admin")
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()

        cy.login('Admin','admin123')
        cy.get('[href="http://www.orangehrm.com/"] > img').should("be.visible")
    })
    it("verify invalid credential for login ",()=>{
    //     cy.get('#txtUsername').type("Admin")
    //     cy.get('#txtPassword').type('admin')
    //     cy.get('#btnLogin').click()
        cy.login('admin','123')
        cy.get('#spanMessage').should("have.text",'Invalid credentials')
    })
})