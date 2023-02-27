import * as user from '../fixtures/user.json';
import {findItem, loginViaUi}  from '../support/helper';

it('Order', () => {

    loginViaUi(user);
    

    cy.get('#filter_keyword').type('e')
    cy.get('.button-in-search').click()
    
//function{}, що імпортована з helper'а
    cy.get('.col-md-12.col-xs-12.mt20')
    .then((body) => {
        if (body.find('[title="Fiorella Purple Peep Toes"]').length > 0) {
            cy.get('[title="Fiorella Purple Peep Toes"]').click()
            
        } else if (body.find('[title="Fiorella Purple Peep Toes"]').length == 0){
            cy.get('.pagination li a').contains(">").click()
            //тут рекурсія function{}
        } else {
            cy.log("Item not found")
        }
    })
})

