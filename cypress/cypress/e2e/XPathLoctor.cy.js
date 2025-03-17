
describe("XPath Locator", () => {

    it("Find number of prodcuts", () => {
        Cypress.log({ name: "HELLOOO" });
        cy.visit("https://www.automationexercise.com/");
        cy.xpath("/html/body/section[2]/div/div/div[2]/div[1]").its("length").then((count) => {
            Cypress.log({ name: "Product Count" });
            Cypress.log({ name: "Product Count", message: count });
        })
    },);

    it("Chained xpath", () => {
        Cypress.log({ name: "HELLOOO" });
        cy.visit("https://www.automationexercise.com/");
        cy.xpath("/html/body/section[2]/div/div/div[2]").xpath("./div[1]").its("length").then((count) => {
            Cypress.log({ name: "Product Count", message: count });
        },);
    });
},);