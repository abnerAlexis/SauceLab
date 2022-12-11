//<reference types = "cypress"/>
import { Inventory } from "./pages/inventory";
import {LoginPage} from "./pages/loginPage";
import {Cart} from "./pages/cart";
import {Checkout} from "./pages/checkout";

const loginPage = new LoginPage();
const inventory = new Inventory();
const cart = new Cart();
const checkOut = new Checkout();

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
});

