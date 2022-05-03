describe('verify the fincatinality for calender',()=>{
    it("verify the functionality for calender",()=>{
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        let date= new Date();

        date.setDate(date.getDate()+300)

        let year=date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let textMonth = date.toLocaleDateString('default',{month:"long"})//short==jan
        // cy.log(year)
        // cy.log(month)
        // cy.log(day)
        // cy.log(textMonth)

        function getMonYear(){
            cy.get('.datepicker-switch').eq(0).then(function(el){
                if(!el.text().includes(year)){
                    cy.get('.next').eq(0).click()
                    getMonYear()

                }
               // cy.log(el.text())
            }).then(()=>{
                cy.get('.datepicker-switch').eq(0).then(function(el){
                    if(!el.text().includes(textMonth)){
                        cy.get('.next').eq(0).click()
                        getMonYear()
                    }
                })
            })
        }
        function getDate(){
            cy.get('.day').contains(day).click()

        }
        getMonYear()
        getDate()
    
    })
})

