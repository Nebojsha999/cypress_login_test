///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

const lockedUser = Cypress.env('users').locked_user;

it ('Login as locked user', ()=>{
  lp.loginUser(lockedUser.username, lockedUser.password);
  cy.get(gl.errorMessage).should('contain', "Epic sadface: Sorry, this user has been locked out.");

});
