describe("Driven Data Test", () => {
    before(() => { 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    },);
    it("Driven Data Test", () => {
        //fixture 

        cy.fixture('data.json').then((value) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            value.forEach((data) => {

                cy.wait(3000);
                cy.get("[name='username']").type(data.userName);
                cy.get("[name='password']").type(data.password);
                cy.get("[type='submit']").click();
                
                if (data.userName == "Admin" && data.password == "admin123") {

                    //Asseration
                    cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", data.expected);
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').should("be.visible");

                    //Logut 
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

                }
                else {
                    cy.get("[role='alert']").should("contain.text", data.expected);
                }
            });
        })
    },);
},);