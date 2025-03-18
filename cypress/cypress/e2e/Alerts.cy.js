const fixture = require('../fixtures/example.json')

describe("Interact with UI elements", () => {

    it("Js Alerts", () => {

        //1) Javascript alert the alert have simple text and 'OK' button
        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/alerts");

        cy.get("[data-test='alert-button']").click();

        //we can't validate message on alert because cypress automatically close alerts so we need an event 
        //here we trigger an event 
        /**
        this event close the alert automatically be press on "OK " button
        so we don't need to identify ok button and click on it 
         */
        cy.on('window:alert', (alertMessage) => {

            //alertMessage -> here is the message which is written on the alert (This is a simple alert!)
            expect(alertMessage).to.contains("This is a simple alert!");


        },);

        //cy.get("[data-test='result-container']").should('contain', "Alert shown");
        cy.get("[data-test='result-container']").should('have.text', "Last action: Alert shown");
    },
    );

    //2) Confiramation alert : that have "OK" and "Cancel" button 
    it("Js Confrim OK Alerts", () => {

        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/alerts");

        //identify button alert 
        //
        cy.get("[data-test='confirm-button']").click();

        cy.on('window:confirm', (alertMessage) => {
            expect(alertMessage).contains("Do you want to proceed?");
        });

        //it will close the alert automatically
        cy.get("[data-test='result-container']").should('have.text', "Last action: Confirm dialog: OK");

    },);

    it("Js Confrim Cancel Alerts", () => {


        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/alerts");

        //identify button alert 
        cy.get("[data-test='confirm-button']").click();

        cy.on('window:confirm', (alertMessage) => {
            expect(alertMessage).to.equal("Do you want to proceed?");
        });

        cy.on('window:confirm', () => false); //if we need to close with cancel button we will use (fasle)

        //    cy.on('window:confirm' ,() => false); //this is mean that it will close using ok button

        cy.get("[data-test='result-container']").should('have.text', "Last action: Confirm dialog: Cancel");
    });

    //3) Prompot alert : have a text field that we can type value from it 
    it("Js Prompot Alerts", () => {

        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/alerts");

        let name = Math.random().toString(36).substring(2, 10);

        //we need to have control first on this alert so we write this code 
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(name);
        },);

        cy.get("[data-test='prompt-button']").click();

        cy.get("[data-test='result-container']").should("contain", name);

    });

    it("Js Prompot using 'Cancel button' Alerts", () => {

        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/alerts");

        //we need to have control first on this alert so we write this code 
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null);
        },);

        cy.get("[data-test='prompt-button']").click();


        cy.get("[data-test='result-container']").should("have.text", "Last action: Prompt dialog: Cancel");

    });

    it.only("Js Auth Alert ", () => {

        //fisrt approcha :we inject username and password as parameters in the url 
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin", }, },);
        cy.get(".example>p").should('contain', "Congratulations");

        //second approcha we inject username and password in url directly
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin", }, },);
        cy.get(".example>p").should('contain', "Congratulations");

    },);
});

