describe("Frams", () => {
    it("first approch", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        //get access of iframe
        let iframe = cy.get("#mce_0_ifr") //acess frame
            .its("0.contentDocument.body") //access document below frame
            .should("be.visible") //check if frame visible 
            .then(cy.wrap);  //wrap

        //typing value
        //{ctrl+a}=> selecting all content 
        //clear()  : to remove content first so i can write what i want 
        iframe.clear().type("MaryamMoamen {ctrl+a}");
    },);
    it("second approch using custome commond", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIFrame('#mce_0_ifr').clear().type("MaryamMoamen {ctrl+a}");

        cy.get("[aria-label='Bold']").click();

    },);

    it("third approch using iframe plugin", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded("#mce_0_ifr"); //this method load the frame just load the frame 

        cy.iframe("#mce_0_ifr").clear().type("MaryoumMariam {ctrl+a"); //this method we use so we can interact with frame after loading 

        cy.get("[aria-label='Bold']").click();

    },);
},);