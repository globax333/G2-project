class Order{
    visit(){
        cy.log('**Open registration page**');
        cy.visit('/index.php?rt=product/product&product_id=68');
    }
    
    getQuantity(){
    return cy.get('#product_quantity')
    }
    addToCart(){
    return cy.get('.productpagecart')
    }
    btnCheckout(){
        return cy.get('#cart_checkout1')
        }
    bntConfirmOrder(){
        return cy.get('#checkout_btn')
    }
    HeaderOrderProcessed(){
        return cy.get('.maintext')
    }
    HeaderOrderProcessed2(){
        return cy.get('.mb40 p')
    }






}
export default new Order();