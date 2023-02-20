
import * as user from '../fixtures/user.json';


it('Order', () => {

    let csrftoken;
    let csrfinstance;

    cy.request('GET', '/index.php?rt=account/login').then(response => {
        let htmlResponce = document.createElement('html')
        // console.log(htmlResponce);
        htmlResponce.innerHTML=response.body;
        csrftoken = htmlResponce.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
        csrfinstance = htmlResponce.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
    }).then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            body: {
                loginname: user.username,
                password: user.password,
                csrfinstance: csrfinstance,
                csrftoken: csrftoken 
            },
            form: true
        })
    })
  

    cy.visit('/index.php?rt=account/account');
    cy.log('Verify user first name on account page');
    cy.get('h1 span.subtext', {timeout: 20000}).should('contain', user.firstName)

})