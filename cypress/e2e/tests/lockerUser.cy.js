///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

it ('Login as locker user', ()=>{
  lp.loginUser("locked_out_user", "secret_sauce")
  cy.get(gl.errorMessage).should('contain', "Epic sadface: Sorry, this user has been locked out.");

});
