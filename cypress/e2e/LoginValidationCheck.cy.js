///<reference types="cypress"/>
import user from '../fixtures/example.json'
import AutorizationPage from '../support/pages/AutorizationPage'

it(`Correct login for ${user.userName} and wrong password`, () => {
  
  AutorizationPage.visit();
  AutorizationPage.getLoginField().type(user.userName)
  AutorizationPage.getPasswordField().type('WrongPassword123')
  AutorizationPage.getLoginButton().click()
  AutorizationPage.Error_Message_On_Login()
  .should('contain.text', '\n×\nError: Incorrect login or password provided.')
  AutorizationPage.Cross_On_Error_Message_On_Login().click();

})

it('Empty login and password', () => {
  
  AutorizationPage.visit();
  AutorizationPage.getLoginField().clear()
  AutorizationPage.getPasswordField().clear()
  AutorizationPage.getLoginButton().click()
  AutorizationPage.Error_Message_On_Login()
  .should('contain.text', '\n×\nError: Incorrect login or password provided.')
  AutorizationPage.Cross_On_Error_Message_On_Login().click();

})


it('Empty login and present password', () => {
  
  AutorizationPage.visit();
  AutorizationPage.getLoginField().clear()
  AutorizationPage.typeTextPasswordField(user.password)
  AutorizationPage.getLoginButton().click()
  AutorizationPage.Error_Message_On_Login()
  .should('contain.text', '\n×\nError: Incorrect login or password provided.')
  AutorizationPage.Cross_On_Error_Message_On_Login().click();

})

it('Empty password and present login', () => {
  
  AutorizationPage.visit();
  AutorizationPage.typeTextLoginFIeld(user.userName);
  AutorizationPage.getPasswordField().clear();
  AutorizationPage.getLoginButton().click();
  AutorizationPage.Error_Message_On_Login()
  .should('contain.text', '\n×\nError: Incorrect login or password provided.');
  AutorizationPage.Cross_On_Error_Message_On_Login().click();

})

it('Incorrect password and login', () => {
  
  AutorizationPage.visit();
  AutorizationPage.typeTextLoginFIeld('fsdfsdfsd');
  AutorizationPage.typeTextPasswordField('sdfsdfsd');
  AutorizationPage.getLoginButton().click();
  AutorizationPage.Error_Message_On_Login()
  .should('contain.text', '\n×\nError: Incorrect login or password provided.');
  AutorizationPage.Cross_On_Error_Message_On_Login().click();

})

it(`Error message after refreshing page`, () => {
  
  AutorizationPage.visit();
  AutorizationPage.getLoginField().clear()
  AutorizationPage.getPasswordField().clear()
  AutorizationPage.getLoginButton().click()
  cy.reload()
  AutorizationPage.Error_Message_On_Login()
  .should('contain.text', 'Unknown error encountered. Please try again!')
  AutorizationPage.Cross_On_Error_Message_On_Login().click();
})



