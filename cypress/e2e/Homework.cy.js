import * as user from '../fixtures/user.json';
import {findItem, loginViaUi}  from '../support/helper';

it('Order', () => {

    loginViaUi(user);
    

    cy.get('#filter_keyword').type('e')
    cy.get('.button-in-search').click()
    
    // 1 варіант. Тут він не сприймає catch як функцію, я вже не знаю, шо робити

    function findItem1(item) {
        cy.get('.thumbnails.grid.row.list-inline').then(() => {
            cy.get(item, {timeout: 10000}).click()
        }).catch(() => {
            cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=e&category_id=0&sort=date_modified-ASC&limit=20&page=2"]')
            .eq(1)
            .click();

            findItem1(item);
        });
    }

    // findItem1('[title="Eye Rejuvenating Serum"]');

    //другий варіант. Тут я не розумію, як запустити тест повторно на наступній сторінці, for не зрозуміла як імплементувати.


    cy.get('.thumbnails.grid.row.list-inline')
    .then((element) => {
        if (element.find('[title="Eye Rejuvenating Serum"]').length > 0) {
            cy.get('[title="Eye Rejuvenating Serum"]').click()
        }
        else{
            //елемент пробувала знайти через li та .children, але не вийшло(((
            cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=e&category_id=0&sort=date_modified-ASC&limit=20&page=2"]')
            .eq(1)
            .click()
        }

})
})

