describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    const email= cy.get(`input[name="email"]`)
    email.type("usama@gmail.com")
    const password=cy.get(`input[name="password"]`)
    password.type("12345678!Qq")
     const submit=cy.get(`#login`)
     submit.click()
     cy.wait(9000)
    
     cy.get(`#order`).click()
     cy.wait(3000)
     cy.get(`#vorder`).click()
      cy.wait(6000)
      cy.get(`#vorder`).click()

  })
})