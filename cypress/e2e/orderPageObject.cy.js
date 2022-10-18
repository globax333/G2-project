///<reference types="cypress"/>
import user from '../fixtures/example.json'
import OrderPage from '../support/pages/OrderPage';


it(`Check order for user: ${user.userName}`, () => {
  cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

  OrderPage.visit()

  OrderPage.getQuantity().clear().type(4);
  OrderPage.addToCart().click();
  OrderPage.btnCheckout().click();
  OrderPage.bntConfirmOrder().click();
  OrderPage.HeaderOrderProcessed().should('contain', ' Your Order Has Been Processed!');
  OrderPage.HeaderOrderProcessed2().should('contain', 'Thank you for shopping with us!')
  .and('contain', 'Your order')
  .and('contain', 'has been created!')
  .and('contain', 'You can view your order details by going to the ')
  .and('contain', 'Please direct any questions you have to the ')
  .and('contain', 'Thank you for shopping with us!')

})

