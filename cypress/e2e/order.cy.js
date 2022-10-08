///<reference types="cypress"/>
import user from '../fixtures/example.json'
import searchExistingProduct from '../support/helper'


it('Plase order', () => {
  cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);


  cy.visit('/index.php?rt=product/product&product_id=68');
  cy.get('#product_quantity').clear().type(4);
  cy.get('.productpagecart').click();
  
})