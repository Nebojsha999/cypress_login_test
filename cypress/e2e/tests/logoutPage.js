import { globalLocators } from "./globalLocators";
const gl = new globalLocators();

export class logoutPage {

    logoutUser () {
        cy.get(gl.menue).click();
        cy.wait(1500);
        cy.get(gl.logout).click();    
    }
}