///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

it ('Login as standard user', ()=>{
  lp.loginUser("standard_user","secret_sauce")
  cy.contains('Swag Labs').should('exist')
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
});
it ('Login as standard user and add item to cart', ()=>{
  lp.loginUser("standard_user","secret_sauce")
  cy.get(gl.addToCartSauceLabsBacpak).click();
  cy.get(gl.removeSauceLabBacpak).should('be.visible')
  cy.get(gl.shoppingCartBadge).should('contain', '1')
});

