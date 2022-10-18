///<reference types="cypress"/>
import user from '../fixtures/example.json'
import searchExistingProduct from '../support/helper'


it('Plase order', () => {
  cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);


  cy.visit('/index.php?rt=product/product&product_id=68');
  cy.get('#product_quantity').clear().type(4);
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');

  cy.get('.mb40 p').should('contain', 'Thank you for shopping with us!')
  .and('contain', 'Your order')
  .and('contain', 'has been created!')
  .and('contain', 'You can view your order details by going to the ')
  .and('contain', 'Please direct any questions you have to the ')
  .and('contain', 'Thank you for shopping with us!')
})


/*it('Plase order', () => {
  cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);


  cy.visit('/');

  searchExistingProduct('Benefit Bella Bamba')

  cy.get('#product_quantity').clear().type(4);
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');

  cy.get('.mb40 p').should('contain', 'Thank you for shopping with us!')
  .and('contain', 'Your order')
  .and('contain', 'has been created!')
  .and('contain', 'You can view your order details by going to the ')
  .and('contain', 'Please direct any questions you have to the ')
  .and('contain', 'Thank you for shopping with us!')
})
*/

it.skip('Place order via search', () => { 

  cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

  cy.visit('/');

  searchExistingProduct('Benefit Bella Bamba');

  cy.get('#product_quantity').clear().type('4');
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('h1.heading1').should('contain', 'Your Order Has Been Processed!');

  cy.get('.contentpanel')
  .should('contain', 'Thank you for shopping with us!')
  .and('contain', 'Your order ')
  .and('contain', 'has been created!');

})