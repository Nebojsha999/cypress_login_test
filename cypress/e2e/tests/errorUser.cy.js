///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

const errorUser = Cypress.env('users').error_user;

it ('Login as locker user', ()=>{
  lp.loginUser(errorUser.username, errorUser.password);
  cy.get(gl.addToCartSauceLabsFleeceJacket).click();
  cy.get(gl.removeSauceLabsFleeceJacket).should('be.visible');

});
