///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

it ('Login as problem user', ()=>{
  lp.loginUser("problem_user","secret_sauce")
  cy.get('img[src="/static/media/sl-404.168b1cce.jpg"]')
  cy.get(gl.img).should('be.visible').should('have.length', 1);
  //cy.get(gl.img).should('be.visible').should('have.length', 6); This assert will pass
});
