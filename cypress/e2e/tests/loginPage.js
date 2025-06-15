import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

export class loginPage {

    loginUser (username, password) {
        cy.visit('https://www.saucedemo.com/');
        cy.get(gl.username).type(username);
        cy.get(gl.password).type(password);
        cy.get(gl.loginButton).click();
        cy.wait(1500);
    }

}
