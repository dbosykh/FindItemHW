import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    visit(){
        cy.log('Open website home page');
        cy.visit('/');
    }

    openLoginPage(){
        return  cy.get('#customer_menu_top') 
    }
    
    getContinueButton(){
        return cy.get('[title="Continue"]')
    }

    getFirstNameField(){
        return cy.get('#AccountFrm_firstname') 
    }

    getLastNameField(){
        return cy.get('#AccountFrm_lastname')
    }

    getEmailField(){
        return cy.get('#AccountFrm_email')
    }

    getAddressField(){
        return cy.get('#AccountFrm_address_1')
    }

    getCityField(){
        return cy.get('#AccountFrm_city')
    }

    getPostcodeField(){
        return cy.get('#AccountFrm_postcode')
    }

    getCountryField(){
        return cy.get('#AccountFrm_country_id')
    }

    getLoginNameField(){
        return cy.get('#AccountFrm_loginname')
    }

    getPasswordField(){
        return cy.get('#AccountFrm_password')
    }

    getConfirmPasswordField(){
        return cy.get('#AccountFrm_confirm')
    }

    getZoneIdField(){
        return cy.get('#AccountFrm_zone_id')
    }

    getFirstCheckbox(){
        return cy.get('#AccountFrm_newsletter0')
    }

    getSecondCheckbox(){
        return cy.get('#AccountFrm_agree')
    }

    getSubmitButton(){
        return cy.get('button[title="Continue"]')
    }

    
    submitRegistrationForm(user){
        cy.log('Trying to sign up')

        this.openLoginPage().click();
        this.getContinueButton().click();
        this.getFirstNameField().type(user.firstName);
        this.getLastNameField().type(user.lastName);
        this.getEmailField().type(user.email);
        this.getAddressField().type(user.address);
        this.getCityField().type(user.city);
        this.getPostcodeField().type(user.postCode );
        this.getCountryField().select('Denmark');
        this.getLoginNameField().type(user.username);
        this.getPasswordField().type(user.password);
        this.getConfirmPasswordField().type(user.password);
        this.getZoneIdField().select(2, {force:true}).invoke('val').should('not.eq', 'FALSE');
        this.getFirstCheckbox().check();
        this.getSecondCheckbox().check();
        this.getSubmitButton().click();

    }

    verifyRegistration(){
        cy.get('.maintext').should('contain', ' Your Account Has Been Created!')
    }
}

export default new RegistrationPage();

