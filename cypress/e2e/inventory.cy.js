describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    const email= cy.get(`input[name="email"]`)
    email.type("usama@gmail.com")
    const password=cy.get(`input[name="password"]`)
    password.type("12345678!Qq")
     const submit=cy.get(`#login`)
     submit.click()
     cy.wait(3000)
    
     cy.get(`#inventory`).click()
     cy.wait(3000)
     cy.get(`#1edit`).click()
      cy.wait(3000)
      cy.get(`#cancel`).click()
      cy.wait(3000)
      cy.get(`#add`).click()
      cy.wait(3000)
      cy.get(`#cancel`).click()

  })
})