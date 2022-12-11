//<reference types = "cypress"/>
export class Inventory {
    #buttonAddBackPack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    #buttonRemoveBackPack = '[data-test="remove-sauce-labs-backpack"]';
    #buttonAddBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    #buttonremoveBikeLight = '[data-test="remove-sauce-labs-bike-light"]';
    #buttonAddBoltTShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'; 
    #buttonRemoveBoltShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';  
    #buttonAddFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
    #buttonRemoveFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
    #buttonAddOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]';
    #buttonRemoveOnesie = '[data-test="remove-sauce-labs-onesie"]';
    #buttonAddTestAllThingsRedTShirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]';
    #buttonRemoveTestAllThingsRedShirt = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';
    #numOfItemsInShoppingCart = '.shopping_cart_badge';
    #shoppingCartLink = '.shopping_cart_link';

    validateAddBackpackBtnText() {
       cy.get(this.#buttonAddBackPack).should('have.text', 'Add to cart');
       return this;
    }

    validateRemoveBackpackBtnText() {
        cy.get(this.#buttonRemoveBackPack).should('have.text', 'Remove');
        return this;
    }
    
    addBackPack() {
        cy.get(this.#buttonAddBackPack).click();
        return this;
    }
    removeBackPack() {
        cy.get(this.#buttonRemoveBackPack).click();
        return this;
    }

    addBikeLight() {
        cy.get(this.#buttonAddBikeLight).click();
        return this;
    }
    removeBikeLight() {
        cy.get(this.#buttonremoveBikeLight).click();
        return this;
    }

    addBoltTShirt() {
        cy.get(this.#buttonAddBoltTShirt).click();
        return this;
    }
    removeBoltTShirt() {
        cy.get(this.#buttonRemoveBoltShirt).click();
        return this;
    }

    addFleeceJacket() {
        cy.get(this.#buttonAddFleeceJacket).click();
        return this;
    }

    removeFleeceJacket() {
        cy.get(this.#buttonRemoveFleeceJacket).click();
        return this;
    }

    addOnesie() {
        cy.get(this.#buttonAddOnesie).click();
        return this;
    }

    removeOnesie() {
        cy.get(this.#buttonRemoveOnesie).click();
        return this;
    }

    addTestAllThingsShirt() {
        cy.get(this.#buttonAddTestAllThingsRedTShirt).click();
        return this;
    }

    removeTestAllThingsShirt() {
        cy.get(this.#buttonRemoveTestAllThingsRedShirt);
        return this;
    }

    validateCartItem(number) {
        cy.get(this.#numOfItemsInShoppingCart).should('have.text', number);
        return this;
    }

    validateIfItemDoesNotExist() {
        cy.get(this.#numOfItemsInShoppingCart).should('not.exist');
        return this;
    }

    goToShoppingCart() {
        cy.get(this.#shoppingCartLink).click();
        return this;
    }
}
