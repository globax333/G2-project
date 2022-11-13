///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct, searchProduct, searchProductWithRecursion} from '../support/helper'
describe('test', () => {

  it('Place order', () => {

    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);
  
    cy.visit('/index.php?rt=product/product&product_id=52');
  
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
  
  it('Place order via search ', () => {
  
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
  
  it('Place order via search with helper', () => {
  
    cy.visit('/index.php?rt=account/login');
  
    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password)
  
    cy.get('button[title="Login"]').click();
    cy.get('h1.heading1').should('contain', user.firstName).and('contain', "My Account");
  
    cy.get('#filter_keyword').type('i').closest('form').submit();
  
    searchProductWithRecursion('Benefit Bella Bamba');
  
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
})