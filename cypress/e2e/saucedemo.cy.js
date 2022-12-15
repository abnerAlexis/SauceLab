//<reference types = "cypress"/>
import { Inventory } from "./pages/inventory";
import {LoginPage} from "./pages/loginPage";
import {Cart} from "./pages/cart";
import {Checkout} from "./pages/checkout";
import {Overview} from "./pages/overview";

const loginPage = new LoginPage();
const inventory = new Inventory();
const cart = new Cart();
const checkOut = new Checkout();
const overview = new Overview();

var userName = 'standard_user';
var password = 'secret_sauce';


it('Sauce Demo', () => { 
    cy.visit('https://www.saucedemo.com/');
    loginPage.login(userName, password);
    inventory.validateAddBackpackBtnText()
            .addBackPack()
            .validateRemoveBackpackBtnText()
            .validateCartItem('1')
            .removeBackPack()
            .validateAddBackpackBtnText()
            .validateIfItemDoesNotExist()
            .addTestAllThingsShirt()
            .goToShoppingCart();
    cart.removeTestAllthingsShirt()
            .continueShopping();
    inventory.addBackPack()
            .addBoltTShirt()
            .addBikeLight()
            .goToShoppingCart()
            .validateCartItem('3');
    cart.checkOut();
    checkOut.enterFirstname()
            .enterLastname()
            .enterZipcode()
            .completeShopping();
    overview.validateNumberOfItemsInShoppingCart('3')
            .validateBackpackLabel('Sauce Labs Backpack')
            .validateBackpackQuantity('1')
            .validateBackpackPrice('$29.99')
            .validateBoltTShirtLabel('Sauce Labs Bolt T-Shirt')
            .validateBoltTShirtQuantity('1')
            .validateBoltTShirtPrice('$15.99')
            .validateBikeLightLabel('Sauce Labs Bike Light')
            .validateBikeLightQuantity('1')
            .validateBikeLigthPrice('$9.99')
            .validateSubTotal('Item total: $55.97')
            .validateTax('Tax: $4.48')
            .validateTotalPayment('Total: $60.45')
            .finishShopping();
});

