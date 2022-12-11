//<reference types = "cypress"/>
export class Checkout {
    #firstnameTextBox = '[data-test="firstName"]';
    #lastnameTextBox = '[data-test="lastName"]';
    #zipcodeTextBox = '[data-test="postalCode"]';
    #buttonContinue = '[data-test="continue"]';

    enterFirstname() {
        cy.get(this.#firstnameTextBox).type('Emily');
        return this;
    }

    enterLastname() {
        cy.get(this.#lastnameTextBox).type('Clement');
        return this;
    }

    enterZipcode() {
        cy.get(this.#zipcodeTextBox).type('dld85674');
        return this;
    }

    completeShopping() {
        cy.get(this.#buttonContinue).click();
        return this;
    }
}