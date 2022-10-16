class RegisterPage{
    visit(){
        cy.log('**Open registration page**');
        cy.visit('/index.php?rt=account/create');
    }
 
    getFirstname(){
        return  cy.get('#AccountFrm_firstname') 
    }
    getLastname(){
        return  cy.get('#AccountFrm_lastname') 
    }
    getEmail(){
        return  cy.get('#AccountFrm_email') 
    }
    getAddress1(){
        return  cy.get('#AccountFrm_address_1') 
    }
    getCity(){
        return  cy.get('#AccountFrm_city') 
    }
    getRegion(){
        return  cy.get('#AccountFrm_zone_id')
    }
    getPostCode(){
        return  cy.get('#AccountFrm_postcode')
    }
    getCountry(){
        return  cy.get('#AccountFrm_country_id')
    }
    getLogin(){
        return  cy.get('#AccountFrm_loginname')
    }
    getPassword(){
        return  cy.get('#AccountFrm_password')
    }
    getConfirmPassword(){
        return  cy.get('#AccountFrm_confirm')
    }
    getNewsletter(){
        return  cy.get('#AccountFrm_newsletter0')
    }
    getPrivacyPolicy(){
        return cy.get('#AccountFrm_agree')
    }

    CTAonRegisterPage(){
        return cy.get('[class="btn btn-orange pull-right lock-on-click"]')
    }

    YourAccounnCreated(){
        return cy.get('span.maintext')
    }

}
export default new RegisterPage();