
describe("Mouse Events ", () => {
    it("Mouse Hover", () => {
        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/hover");

        //cypress have method called trigger and take mouseover as akey so we can preform hovering on

        for (let i = 1; i <= 3; i++) {

            cy.get(`[data-test='hover-figure-${i}']`).should('be.visible');

            cy.get(`[data-test='hover-figure-${i}']`).trigger("mouseover");

            cy.wait(3000);
        }

    },);
    it("Right Click", () => {
        //first approach 
        cy.visit("https://practice.expandtesting.com/context-menu");

        cy.get("#hot-spot").trigger("contextmenu");

        cy.on("window:alert", (alertMessage) => {
            expect(alertMessage).contains("You selected a context menu");
        },);

        //second approach 
        cy.get("#hot-spot").rightclick();

        cy.on("window:alert", (alertMessage) => {
            expect(alertMessage).contains("You selected a context menu");
        },);
    },);
    it("Double Click", () => {
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick");

        //Approach one 
        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find("[ondblclick='myFunction()']").trigger("dblclick"); //using trigger event 
        cy.iframe("#iframeResult").find("#demo").should('eq', "Hello World");

        //Second aapproach 
        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find("[ondblclick='myFunction()']").dblclick(); //using method
        cy.iframe("#iframeResult").find("#demo").should('eq', "Hello World");

    },);

    it("Drag and Drop", () => {
        //we will use pluging to preforme drag and drop action 

        //cy.visit("https://practice.expandtesting.com/drag-and-drop-circles");

        /*cy.get(".red").drag("#target"); //we use drag function and set the target 
        cy.get(".blue").drag("#target").wait(5000);
        cy.get(".green").should('be.visible').drag("#target", { force: true });*/

        cy.visit("https://moatazeldebsy.github.io/test-automation-practices/#/drag-drop");
        cy.get("[data-test='drag-handle-Item 1']").should('be.visible');
        cy.get("[data-test='drag-handle-Item 1']").drag("[data-test='sortable-item-Item 3']", { force: true }).wait(5000);

    },);
    it.only("Scrolling view", () => {
        cy.visit("https://www.w3schools.com/js/js_strings.asp");
        cy.get(".w3-note").eq(3).scrollIntoView({duration:2000});
        //.color_h1
        cy.get(".color_h1").scrollIntoView({duration:2000});
        cy.get(".color_h1").should("be.visible");

    },);

},);