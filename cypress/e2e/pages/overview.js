//<reference types = "cypress"/>
export class Overview {
    #itemnumberlabelShoppingCart = '.shopping_cart_badge';
    #labelBackpack = '#item_4_title_link > .inventory_item_name';
    #labelBackpackQuantity = ':nth-child(3) > .cart_quantity';
    #labelPriceBackpack = ':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #labelBoltTShirt = '#item_1_title_link > .inventory_item_name';
    #labelBoltTShirtQuantity = ':nth-child(4) > .cart_quantity';
    #labelPriceBoltTShirt = ':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #labelBikeLight = '#item_0_title_link > .inventory_item_name';
    #labelBikeLightQuantity = ':nth-child(5) > .cart_quantity';
    #labelPriceBikeLight = ':nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #labelSubTotal = '.summary_subtotal_label';
    #labelTax = '.summary_tax_label';
    #labelTotal = '.summary_total_label';
    #buttonFinish = '[data-test="finish"]';

    validateNumberOfItemsInShoppingCart(number) {
        cy.get(this.#itemnumberlabelShoppingCart).should('have.text', number);
        return this;
    }

    validateBackpackLabel(txt) {
        cy.get(this.#labelBackpack).should('have.text', txt);
        return this;
    }

    validateBackpackQuantity(qty) {
        cy.get(this.#labelBackpackQuantity).should('have.text', qty);
        return this;
    }

    validateBackpackPrice(price) {
        cy.get(this.#labelPriceBackpack).should('have.text', price);
        return this;
    }

    validateBoltTShirtLabel(txt) {
        cy.get(this.#labelBoltTShirt).should('have.text', txt);
        return this;
    }

    validateBoltTShirtQuantity(qty) {
        cy.get(this.#labelBoltTShirtQuantity).should('have.text', qty);
        return this;
    }

    validateBoltTShirtPrice(price) {
        cy.get(this.#labelPriceBoltTShirt).should('have.text', price);
        return this;
    }

    validateBikeLightLabel(txt) {
        cy.get(this.#labelBikeLight).should('have.text', txt);
        return this;
    }

    validateBikeLightQuantity(qty) {
        cy.get(this.#labelBikeLightQuantity).should('have.text', qty);
        return this;
    }

    validateBikeLigthPrice(price) {
        cy.get(this.#labelPriceBikeLight).should('have.text', price);
        return this;
    }

    validateSubTotal(subTotal) {
        cy.get(this.#labelSubTotal).should('have.text', subTotal);
        return this;
    }

    validateTax(tax) {
        cy.get(this.#labelTax).should('have.text', tax);
        return this;
    }

    validateTotalPayment(total) {
        cy.get(this.#labelTotal).should('have.text', total);
        return this;
    }

    finishShopping() {
        cy.get(this.#buttonFinish).click();
        return this;
    }
}
