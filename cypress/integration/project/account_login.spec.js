


describe("Validate account login",()=>{
    beforeEach(function(){
        cy.visit("http://practice.automationtesting.in/my-account/")
    })
    it.skip("register user on my account",()=>{
        cy.get('li[id="menu-item-50"]>a').click({force: true})
        cy.get('input[id="reg_email"]').type('gajananmule21@gmail.com')
        cy.get('#reg_password').type('@dipui2125G')
        cy.get('input[class="woocommerce-Button button"]').eq(1).click()
        cy.get(cy.get('.woocommerce-MyAccount-content > :nth-child(1)')).should("be.visible",' Hello ')
        
    })


    it("log-in with incorrect id and incorect password",()=>{
        cy.get('li[id="menu-item-50"]>a').click({force: true})
        cy.get('input[id="username"]').type('godavari')
        cy.get('#password').type('pass123')
        cy.get('input[value="Login"]').eq(0).click()
        cy.get('.woocommerce-error > li').should('be.visible',": Invalid username. ")

    })



    it("log-in with correct username and empty password",()=>{
        cy.get('li[id="menu-item-50"]>a').click({force: true})
        cy.get('input[id="reg_email"]').type('gajananmule21@gmail.com')
        cy.get('input[id="password"]').type(' ')
        cy.get('input[value="Login"]').eq(0).click()
        cy.get(".woocommerce-error > li").should("be.visible",' Password is required.')
    })


    it("log in with empty username and valid password",()=>{
        cy.get('li[id="menu-item-50"]>a').click({force: true})
        cy.get('input[id="reg_email"]').type(' ')
        cy.get('#reg_password').type('@dipui2125G')
        cy.get('input[value="Login"]').eq(0).click()
        cy.get('.woocommerce-error > li').should("be.visible",' Username is required.')

    })
})