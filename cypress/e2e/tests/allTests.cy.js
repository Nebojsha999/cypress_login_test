///<reference types = "cypress"/>
import { loginPage } from "./loginPage";
const lp = new loginPage();

it ('Login as standard user', ()=>{
  lp.loginUser("standard_user","secret_sauce")
  cy.contains('Swag Labs').should('exist')
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
});

