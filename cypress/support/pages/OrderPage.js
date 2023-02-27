import BasePage from "./BasePage";


class OrderPage extends BasePage{

    getCategoryMenu(){
        return cy.get('.nav-pills.categorymenu').children('li').eq(2)
    }

    getCheeksTab(){
        return cy.get('.thumbnails.row').children('li').eq(0)
    }

    getBronzerStick(){
        return cy.get('.col-md-3.col-sm-6.col-xs-12').children('.thumbnail').eq(0)
    }

    getAddToCartButton(){
        return cy.get('.productpagecart').children('li').eq(0)
    }

    clearQuantity(){
        return cy.get('#cart_quantity50')
    }

    getContinueShoppingButton(){
        return cy.get('a.btn.btn-default.mr10.mb10')
    }

    getFragranceTab(){
        return cy.get('.nav-pills.categorymenu').children('li').eq(4)
    }

    getWomanTab(){
        return cy.get('.thumbnails.row').children('li').last()
    }

    getSorting(){
        return  cy.get('#sort')
    }

    getPriceTagButton(){
        return cy.get('.pricetag.jumbotron').children('.productcart').eq(6)
    }

    getAddToCartButton1(){
        return cy.get('.productpagecart').children('li').eq(0)
    }

    getCheckoutButton(){
        return cy.get('#cart_checkout1')
    }

    getConfirmOrderButton(){
        return  cy.get('#checkout_btn')
    }

    verifyOrder(){
        cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
    }

    placeOrder(){
        cy.log('Placing order')

        this.getCategoryMenu().click();
        this.getCheeksTab().click();
        this.getBronzerStick().click();
        this.getAddToCartButton().click();
        this.clearQuantity().clear().type('2');
        this.getContinueShoppingButton().click();
        this.getFragranceTab().click();
        this.getWomanTab().click();
        this.getSorting().select('Price Low > High');
        this.getPriceTagButton().click();
        this.getAddToCartButton1().click();
        this.getCheckoutButton().click();
        this.getConfirmOrderButton().click();
        this.verifyOrder()
    }
}

export default new OrderPage(); 