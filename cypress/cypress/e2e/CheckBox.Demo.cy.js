describe("Interact with UI elements", () => {

    it("Check Single Checkbox", () => {
        //1- visite website
        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/checkboxes");

        //2- alocate the element
        //3-check single checkbox to be visibel 
        cy.get("[data-test='checkbox-checkbox1']").should('be.visible');

        //4- check single check box to be checked or not 
        cy.get("[data-test='checkbox-checkbox1']").check().should('be.checked');

        //5- Un check the check box and ensure that is not checked
        cy.get("input[data-test='checkbox-checkbox2']").uncheck().should('not.be.checked');

        //cy.get("[data-test='check-all-button']").click();

        //6 -Check multiple checkboxes by (If all checkboxes have the same class or attribute, you can select and check them all like this:javascript Copy Edit
        cy.get("[type='checkbox']").check().should('be.checked'); //we use proper locator that are shared among all checkboxes

        cy.get("[type='checkbox']").uncheck().should('not.be.checked');

        cy.get("[type='checkbox']").first().check().should('be.checked'); //if i want to check first check box among all checkboxes
        cy.get("[type='checkbox']").last().check().should('be.checked'); //if i want to check last check box among all checkboxes
    

    },);
},);