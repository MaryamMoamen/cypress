describe("Custome Commonds ", () => {

    it("Clicking on link", () => {

        cy.visit("https://practice.expandtesting.com/#google_vignette"); // it fails to load because maybe website prevent cypress from accsess theri link

        cy.clickOnLink("Test Login Page");
        cy.get('.active').should("contain.text", "Login Page");
    },);

    it("Overwrite Commond", () => { 
        cy.visit("https://practice.expandtesting.com/#google_vignette"); // it fails to load because maybe website prevent cypress from accsess theri link

        cy.clickOnLink("TEST LOGIN PAGE");
        cy.get('.active').should("contain.text", "Login Page");
    },);

    it.only("Login Commond",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //Login
        cy.loginCommond("Admin","admin123")
    })
},);