///<reference types = "cypress"/>
describe('verify the contactUs form ',()=>{
    it('verify thank You massage',()=>{
        
        cy.ValidateContactUs('godavari','Jadhav','abc@g.com','hii')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it('verify RESET button functionality',()=>{
        cy.ValidateContactUs('godavari','Jadhav','abc@g.com','hii')
        cy.get('input[value="RESET"]').click()
        cy.get('.section_header').should('be.visible','CONTACT US')
    })

    it('verify Invalid',()=>{
        cy.ValidateContactUs('godavari','Jadhav','abc','hii')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('body').contains('Invalid')
    })

    // it.only('verify requred all field',()=>{
    //     cy.ValidateContactUs('godavari','Jadhav','abc@g.com')
    //     cy.get('input[value="SUBMIT"]').click()
    //     cy.get('html').should('contain','all fields')
    // })

    
})