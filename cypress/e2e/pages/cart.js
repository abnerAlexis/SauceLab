//<reference types = "cypress"/>
export class Cart {
    #title = '.title';
    #buttonContinueShopping = '[data-test="continue-shopping"';
    #buttonCheckout = '[data-test="checkout"]';
    #buttonRemoveTestAllThingsShirt = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';
    #buttonRemoveBackPack = '[data-test="remove-sauce-labs-backpack"]';
    #buttonRemoveBikeLight = '[data-test="remove-sauce-labs-bike-light"]';
    #buttonRemoveBoltTShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
    #buttonRemoveFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
    #buttonRemoveOnesie = '[data-test="remove-sauce-labs-onesie"]';

    removeTestAllthingsShirt() {
        cy.get(this.#buttonRemoveTestAllThingsShirt).click();
        return this;
    }

    removeBackPack() {
        cy.get(this.#buttonRemoveBackPack).click();
        return this;
    }

    removeBikeLigth() {
        cy.get(this.#buttonRemoveBikeLight).click();
        return this;
    }

    continueShopping() {
        cy.get(this.#buttonContinueShopping).click();
        return this;
    }

    checkOut() {
        cy.get(this.#buttonCheckout).click();
        return this;
    }
}