describe("Interact with UI elements ", () => { 
    it("Radio Buttons Checking" ,()=> {
        //1- visit the website
        cy.visit("https://practice.expandtesting.com/radio-buttons");
        
        //allocate elemetn
        cy.get("#blue").should('be.visible');
        cy.get("#red").should('be.visible');
        cy.get("#football").should('be.visible');
        cy.get("#tennis").should('be.visible');

        //Check it 
        //assert that it checked or not 
        cy.get("#blue").check().should('be.checked');
        cy.get("#red").check().should('be.checked');
        cy.get("#blue").should('not.be.checked');
        
        cy.get("#football").check().should('be.checked');
        cy.get("#tennis").check().should('be.checked');
    } ,);
},);