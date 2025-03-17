describe("Interact with UI elements", () => {

    it.skip("Normal DropDown", () => {
        cy.visit("https://practice.expandtesting.com/dropdown");

        cy.get("#dropdown")
            .select("Option 1")
            .should("have.value", "1");

        /* cy.get(".form-control").
            select("20").
            should('have.value', '20');*/

        cy.get("#country").select("Albania").should('have.value', 'AL');

    },);

    it.skip("Bootstrap DropDown", () => {
        /**
         * 1- visti web page
         * 2- get the dropdown element and click on it
         * 3- get textfiled and type a value and press enter
         * 4- assert that the text in dropdown menu is true
         */
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.get("#select2-reasondummy-container").click();

        cy.get(".select2-search__field[type='text']").type("Visa application").type("{enter}"); //we can press on enter key on keyboard using this method type("{enter}")

        cy.get("#select2-reasondummy-container").should('have.text', '×Visa application');

    },);

    it.skip("Auto DropDown", () => {
        /**
         * 1- visti web page
         * 2- identify and get the textfield element and type value 
         * 3- select one of those value and click on it
         * 4- assert that the text in dropdown menu is true
         */
        //press enter and for loop
        cy.visit("https://www.wikipedia.org/");

        cy.get("#searchInput").type("Egypt").type("{enter}"); //press enter 

        cy.log(document.querySelector('h3.suggestion-title>em')); //if you want to check if the selector is correct or not you can use this code

        cy.get("h3.suggestion-title>em").contains("Egyptian pyramids").click();//get list of result and then search on them by contains the value i want to  click

        /*cy.get(".suggestion-text").then((value) => {
            cy.log(value);
            for (let i = 0; i < value.length; i++) {
                cy.get(".suggestion-text")[2].click();
            }
        });*/

    },);

    it.skip("Dynamic DropDown", () => {
        //visit web page 
        cy.visit("https://www.google.com/");

        //indentify the element 
        cy.get(".gLFyf").type("cypress automation");

        cy.wait(3000); //here we use wait because sever will take few seconds to get all suggestions 

        cy.get("div.wM6W7d>span").should("have.length", 13);
        //get all sugesstions and store in array using each method()
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {

            if ($el.text() == "cypress automation tutorial") {
                cy.wrap($el).click();
            }
        },);
        cy.get(".gLFyf").should("have.value", "cypress automation tutorial");
    },);
    it.skip("Dynamic DropDown", () => {
        //visit web page 
        cy.visit("https://www.google.com/");

        //indentify the element 
        cy.get(".gLFyf").type("cypress automation");

        cy.wait(3000); //here we use wait because sever will take few seconds to get all suggestions 

        cy.get("div.wM6W7d>span").should("have.length", 13);
        //get all sugesstions and store in array using each method()
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {

            if ($el.text() == "cypress automation tutorial") {
                cy.wrap($el).click();
            }
        },);
        cy.get(".gLFyf").should("have.value", "cypress automation tutorial");
    },);
},);