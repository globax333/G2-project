///<reference types="cypress"/>
import{faker} from '@faker-js/faker'
import RegisterPage from '../support/pages/RegisterPage'

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
  
  RegisterPage.visit()
  RegisterPage.getFirstname().type(user.firstName);
  RegisterPage.getLastname().type(user.lastName);
  RegisterPage.getEmail().type(user.email);
  RegisterPage.getAddress1().type(user.streetAddress);
  RegisterPage.getCity().type(user.city);
  RegisterPage.getRegion().select(1);
  RegisterPage.getPostCode().type(user.zipCode);
  RegisterPage.getCountry().select('United Kingdom');
  RegisterPage.getLogin().type(user.userName);
  RegisterPage.getPassword().type(user.password);
  RegisterPage.getConfirmPassword().type(user.password);
  RegisterPage.getNewsletter().click();
  RegisterPage.getPrivacyPolicy().check();
  RegisterPage.CTAonRegisterPage().click();
  
  RegisterPage.YourAccounnCreated().should('contain', ' Your Account Has Been Created!')
  

})