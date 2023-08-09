describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    const email= cy.get(`input[name="email"]`)
    email.type("usama@gmail.com")
    const password=cy.get(`input[name="password"]`)
    password.type("12345678!Qq")
     const submit=cy.get(`#login`)
     submit.click()
     cy.wait(10000)
    
     cy.get(`#bid`).click()

     cy.wait(6000)
     cy.get(`#yupload`).click()
     cy.wait(6000)
     cy.get('#upload').click()
     cy.wait(6000)
     cy.get("#cancel").click()
      cy.get(`#win`).click()
       cy.wait(6000)
       cy.get(`#apply`).click()
     cy.wait(6000)
       cy.get(`#public`).click()
      

  })
})