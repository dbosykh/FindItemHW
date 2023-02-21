export function loginViaUi(user){
    cy.log('**Open website login page**');
    cy.visit('/');

    cy.log('**Authorize user**');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.get('h1 span.subtext').should('contain', user.firstName);
}

// export function findItem(item){
    // cy.get('#filter_keyword').type('e')
    // cy.get('.button-in-search').click()
    
    // cy.get('.thumbnails.grid.row.list-inline')
    // .should('have.text', 'Nail Lacquer')
// }

// export function headlessLogin(user){
//     let csrftoken;
//     let csrfinstance;

//     cy.request('GET', '/index.php?rt=account/login').then(response => {
//         let htmlResponce = document.createElement('html')
//         // console.log(htmlResponce);
//         htmlResponce.innerHTML=response.body;
//         csrftoken = htmlResponce.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
//         csrfinstance = htmlResponce.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
//     }).then(() => {
//         cy.request({
//             method: 'POST',
//             url: '/index.php?rt=account/login',
//             body: {
//                 loginname: user.username,
//                 password: user.password,
//                 csrfinstance: csrfinstance,
//                 csrftoken: csrftoken 
//             },
//             form: true
//         })
//     })
// }
