///<reference types = "cypress"/>
describe('verify the contactUs form ',()=>{
    it('verify thank You massage',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('input[name="first_name"]').type('godavari')
        cy.get('input[name="last_name"]').type('jadhav')
        cy.get('input[name="email"]').type('godavahri@gmail.com')
        cy.get('textarea[name="message"]').type('hii')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it('verify RESET button functionality',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('input[name="first_name"]').type('godavari')
        cy.get('input[name="last_name"]').type('jadhav')

        cy.get('input[name="email"]').type('godavahri@gmail.com')
        cy.get('textarea[name="message"]').type('hii')
        cy.get('input[value="RESET"]').click()
        cy.get('.section_header').should('be.visible','CONTACT US')
    })

    it('verify Invalid',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('input[name="first_name"]').type('godavari')
        cy.get('input[name="last_name"]').type('jadhav')
        
        cy.get('input[name="email"]').type('godavahri')
        cy.get('textarea[name="message"]').type('hii')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').contains('Invalid')
    })

    it('verify requred all field',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('input[name="first_name"]').type('godavari')
        cy.get('input[name="last_name"]').type('jadhav')
        
        cy.get('input[name="email"]').type('godavahri')
        cy.get('textarea[name="message"]').type()
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','all fields')
    })
})