describe("Navigation", () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    },);
    it("navigation", () => {
        cy.visit("https://practice.expandtesting.com/#google_vignette");
        cy.title().should("eq", "Practice Test Automation WebSite");
        //go to input
        cy.get('#examples > :nth-child(2) > :nth-child(1) > .card > .card-body > .card-title > .my-link').click();
        cy.get('.active').should("contain", "Input");

        cy.wait(3000);

        cy.go('back');
        cy.get("#examples > h2").should("contain.text", "Sample applications for practice test automation");

        cy.wait(3000);

        cy.go("forward");
        cy.get('.active').should("contain", "Input");

        cy.wait(3000);

        cy.go(-1);
        cy.get("#examples > h2").should("contain.text", "Sample applications for practice test automation");

        cy.go(1);
        cy.get('.active').should("contain", "Input");

        cy.reload();
    },);
},);