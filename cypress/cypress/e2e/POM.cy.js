import LoginModel from "../POM/LoginModel";
const fixture = require("../fixtures/orange.json")
describe("POM", () => {
    it("Normal Approach", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("[name='username']").type("Admin");
        cy.get("[name='password']").type("admin123");
        cy.get("[type='submit']").click();

    },);

    it("Using Pom Model", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //We make POM for every feature like login , search , add to cart ,...etc 

        //Login 
        //Take an object from LoginModel class by (new class name)

        let loginObject = new LoginModel(); //we have taken an object so we can access function in login model class 
        loginObject.setUserName("Admin");
        loginObject.setPassword("admin123");
        loginObject.clickOnSubmit();
        loginObject.setValidation("Dashboard");


    },);
    it.only("POM Model Scecond Approach ", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orange.json').then((data) => { 
            let loginObject = new LoginModel(); //we have taken an object so we can access function in login model class 
            loginObject.setUserName(data.userName);
            loginObject.setPassword(data.password);
            loginObject.clickOnSubmit();
            loginObject.setValidation(data.expected);
        },);
    },);


});