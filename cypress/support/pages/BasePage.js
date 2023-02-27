export default class BasePage{ //сюди виносяться елементи які присутні на кожній сторінці 

    getSearchField(){
        return cy.get('#filter_keyword');
    }
}
