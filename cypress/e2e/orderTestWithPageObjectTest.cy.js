import * as user from '../fixtures/user.json'
import OrderPage from '../support/pages/OrderPage';
import {loginViaUi}  from '../support/helper';

it('Place order', () => {
   
   loginViaUi(user);
   OrderPage.placeOrder();

})
