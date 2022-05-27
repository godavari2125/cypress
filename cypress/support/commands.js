// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


//-----------------------------LOGIN FOR ORANGEHRM----------------------------
Cypress.Commands.add('login', (UserName, PassWord)=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/dashboard")
    cy.get('#txtUsername').type(UserName)
    cy.get('#txtPassword').type(PassWord)
    cy.get('#btnLogin').click()
})
//
//

//--------------------------CONTACTUS FORM WEBDRIVEUNIVERSITY--------------------

Cypress.Commands.add('ValidateContactUs',(FirstName,LastName,Email,Comment)=>{
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('input[name="first_name"]').type(FirstName)
        cy.get('input[name="last_name"]').type(LastName)
        cy.get('input[name="email"]').type(Email)
        cy.get('textarea[name="message"]').type(Comment)
})




// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
