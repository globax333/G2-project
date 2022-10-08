///<reference types="cypress"/>
import{faker} from '@faker-js/faker';

const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    userName: faker.internet.userName(),
    password: faker.internet.password(15)
}

it('Registration', () => {
  cy.visit('/');
  console.log(user)
  cy.log('**Open Register page**')
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm button').click();

  cy.get('#AccountFrm_firstname').type(user.firstName);
  cy.get('#AccountFrm_lastname').type(user.lastName);
  cy.get('#AccountFrm_email').type(user.email);
  cy.get('#AccountFrm_address_1').type(user.streetAddress);
  cy.get('#AccountFrm_city').type(user.city);
  cy.get('#AccountFrm_zone_id').select(1);
  cy.get('#AccountFrm_postcode').type(user.zipCode);
  cy.get('#AccountFrm_country_id').select('United Kingdom');
  cy.get('#AccountFrm_loginname').type(user.userName);
  cy.get('#AccountFrm_password').type(user.password);
  cy.get('#AccountFrm_confirm').type(user.password);
  cy.get('#AccountFrm_newsletter0').click();
  cy.get('#AccountFrm_agree').check();
  cy.get('[class="btn btn-orange pull-right lock-on-click"]').click();
  

  cy.get('span.maintext').should('contain', ' Your Account Has Been Created!')
  

})
/*
it('Registration with Faker', () => {
  cy.visit('/');

  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm button').click();

  cy.get('#AccountFrm_firstname').type('firstname');
  cy.get('#AccountFrm_lastname').type('LastNadme');
  cy.get('#AccountFrm_email').type('qwefffdd11@qwe.com');
  cy.get('#AccountFrm_address_1').type('address 1');
  cy.get('#AccountFrm_city').type('SomeCity');
  cy.get('#AccountFrm_zone_id').select(1);
  cy.get('#AccountFrm_postcode').type('36589');
  cy.get('#AccountFrm_country_id').select('United Kingdom');
  cy.get('#AccountFrm_loginname').type('usernamffde41');
  cy.get('#AccountFrm_password').type('qweqweq!@#!#');
  cy.get('#AccountFrm_confirm').type('qweqweq!@#!#');
  cy.get('#AccountFrm_newsletter0').click();
  cy.get('#AccountFrm_agree').check();
  cy.get('[class="btn btn-orange pull-right lock-on-click"]').click();
  

  cy.get('span.maintext').should('contain', ' Your Account Has Been Created!')
  

})
*/