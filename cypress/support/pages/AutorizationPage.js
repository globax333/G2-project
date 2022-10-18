import BasePage from "./BasePage";

class AutorizationPage extends BasePage{
    visit(){
        cy.log('**Open login page**'); // ** жирний шрифт
        cy.visit('/index.php?rt=account/login');
    }
             // ЕЛЕМЕНТИ
    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }
    getPasswordField(){
        return cy.get('#loginFrm_password');
    }
    getLoginButton(){
        return cy.get('button[title="Login"]');

            // МЕTОДИ
    }
    typeTextLoginFIeld(userName){
        cy.log(`Type username ${userName} in login field`)
        this.getLoginField().type(userName);
    }
    typeTextPasswordField(password){
        cy.log(`Type username ${password} in login field`)
        this.getPasswordField().type(password);
    }
            // Дії над методами

        SubmitLoginForm (userName, password ) {
        cy.log(`Fill login form`);
        this.getLoginField().type(userName);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();
    }
    
    Error_Message_On_Login(){
        return  cy.get('[class="alert alert-error alert-danger"]')
    }
    Cross_On_Error_Message_On_Login(){
        return  cy.get('button[class="close"]')
    }
    

}
export default new AutorizationPage();