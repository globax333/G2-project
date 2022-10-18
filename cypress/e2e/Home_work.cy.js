///<reference types="cypress"/> 
import searchExistingProduct2 from '../support/helper'



it('Search product on different pages', () => {

  cy.visit('/');

    function searchExistingProduct2(productName){
    cy.get('#filter_keyword')
    .type('i')
    .closest('form')
    .submit()
  
    if(cy.get('[class="prdocutname"][title="Tropiques Minerale Loose Bronzer"]')
    .should('contain', productName) )
    {console.log('YES')}
    else {cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=i&category_id=0&sort=date_modified-ASC&limit=20&page=2"]')
    .click({ multiple: true})
  }
}



 searchExistingProduct2('Calvin Klein Obsession For Women EDP Spray');

})




//cy.get('[class="prdocutname"][title="Tropiques Minerale Loose Bronzer"]')
//.should('contain', productName)

/*
#домашка на 13.10
Написати функцію в хелпері. Функція приймає як аргумент назву товару. Дії функції: 

Виконати пошук на сайті (бажано шукати букву "I", щоб пошукова видача була велика, бо на сайті мало товарів). 
Для даного прикладу текст для пошуку можна захардкодити, бо він завжди буде однаковий.

Спробувати знайти на сторінці товар, назва которого передається у функцію.
Якщо товару на сторінці не має, перейти на наступну сторінку.

Виконувати переходи на наступну сторінку до тих пір, поки товар не буде знайдений.

Якщо товар знайдений на сторінці, то клікнути на нього і зробити замовлення.
*/