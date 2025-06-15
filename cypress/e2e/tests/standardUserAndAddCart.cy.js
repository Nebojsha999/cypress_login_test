///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

const standardUser = Cypress.env('users').standard_user;

it ('Login as standard user', ()=>{
  lp.loginUser(standardUser.username, standardUser.password);
  cy.contains('Swag Labs').should('exist');
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
});
it ('Login as standard user and add item to cart', ()=>{
  lp.loginUser(standardUser.username, standardUser.password);
  cy.get(gl.addToCartSauceLabsBacpak).click();
  cy.get(gl.removeSauceLabBacpak).should('be.visible');
  cy.get(gl.shoppingCartBadge).should('contain', '1');
  cy.wait(15000);
});


