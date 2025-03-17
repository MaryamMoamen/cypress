describe("Handleing Tabs ", () => {
    it("First approach .. Remove attrbuites  ", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");

        //we use invoke function to remove the attrbuite from html on run time 
        cy.get(".example>a").invoke("removeAttr", "target").click();

        cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new");

        cy.get(".example> h3").should("contain", "New Window")

        cy.go('back'); //if i want to go back to the parent window
    },);

},);
it.only("Second approach .. Remove attrbuites  ", () => {

    cy.visit("https://the-internet.herokuapp.com/windows");

    cy.get(".example>a").then((element) => { //save the element into a varaible 

        let url = element.prop('href'); //extract the value of this tag using prop() and save into a varaible => we write name of property on it 

        cy.log(element.prop('href'));

        cy.visit(url); //visit the value in that varaiable
    })

    cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new");

    cy.get(".example> h3").should("contain", "New Window")

    cy.go('back'); //if i want to go back
},);
