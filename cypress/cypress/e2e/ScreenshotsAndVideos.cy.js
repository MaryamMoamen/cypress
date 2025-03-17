describe("Screenshots and Videos", () => {
    it("Capture Screenshots and Videos", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(5000); //الويت عشان كان مبيلحقش ياخد سكرين شوت من الصفحه فا بقوله استنى 
        cy.screenshot("Home");

        cy.get('.orangehrm-login-branding').screenshot("Logo");
    })

    it("Capture automatically using ctl -> terminal", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("[name='username']").type("XYZ");
        cy.get("[name='password']").type("admin123");
        cy.get("[type='submit']").click();
        cy.get("[role='alert']").should("contain.text", "Correct");
    },);
},);