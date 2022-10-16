///<reference types="cypress"/>
import user from '../fixtures/example.json';
import autorizationPage from '../support/pages/AutorizationPage'
import AccountPage from '../support/pages/AccountPage'

it('Registration', () => {
  
  autorizationPage.visit();

  autorizationPage.SubmitLoginForm(user.userName, user.password)

  AccountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account")

  cy.getCookie('AC_SF_8CEFDA09D5').should('exist');

})

it('Test search', () => {
  
  autorizationPage.visit();

  autorizationPage.performSearch('i');

})