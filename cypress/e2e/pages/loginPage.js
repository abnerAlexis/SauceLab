//<reference types = "cypress"/>
export class LoginPage {
    usernameTextbox = '[data-test="username"]';
    passwordTextbox = '[data-test="password"]';
    loginButton = '[data-test="login-button"]'

    login(username, password) {
        cy.get(this.usernameTextbox).type(username);
        cy.get(this.passwordTextbox).type(password);
        cy.get(this.loginButton).click();
    }
}