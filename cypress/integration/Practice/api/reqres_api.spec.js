describe('validating four basic api',()=>{
    it('validate the GET request',()=>{
        cy.request({
            method: "GET",
            url:"https://reqres.in/api/users?page=1"

        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })
    it("validate the post request",()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            expect(response.status).to.eq(201)
        })
    })
    it("validate the DELETE request",()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",

        }).then(function(response){
            expect(response.status).to.eq(204)
        })
    })
    it("validate the PUT request",()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name":"Godavari Jadhav",
                "job":"Teaster"
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })
})





