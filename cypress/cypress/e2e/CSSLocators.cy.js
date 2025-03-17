describe("Search By CSS Selector", () => {
    it("search about product", () => {
        //steps 
        /**
         * 1- open website 
         * 2- identify the element => get(locator)
         * 3- locate the element
         * 4- preform actions  
         */

        //1- open website 
        cy.visit("https://www.automationexercise.com/products");

        //2- identify the element

        // type() : we use it so we can insert the value we need into element 

        //cy.get("#search_product").type("T-shirt"); //id 

        // cy.get(".form-control").type("Blouses"); //class 

        // cy.get("[name='search']").type("Shoes"); //attrbuite name

        cy.get(".form-control[name='search']").type("Shoes"); //class attrbuite

        //ckick() : we use it so we can click on the element
        cy.get("#submit_search").click();

        cy.get(".title").contains("Searched Products"); //Asseration -> Here i am verfying that this element contain this text


    },)
},);