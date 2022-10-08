///<reference types="cypress"/>
import user from '../fixtures/example.json'


it('Registration', () => {
  
  cy.visit('/')
  cy.get('#loginFrm_loginname').type(user.userName)
  cy.get('#loginFrm_password').type(user.password)
  cy.get('button[title="Login"]').click();
  cy.get('h1.heading1').should('contain', user.firstName).and('contain', "My Account")


  cy.getCookies('AC_SF_8CEFDA09D5').should('exist');


})
