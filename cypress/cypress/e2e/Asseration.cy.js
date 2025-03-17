const { expect } = require("chai");
const example = require('../fixtures/example.json')
describe("Asseration", () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
    it("Implicit Asseration", () => {
        /**
         * 1- visit website
         * 2- assert using inculde keyword and shoud()
         * 3- assert using eq keyword and should()
         * 4- assert using contain keyword and should()
         * 5- Multiple asseration using should()
         * 6- Multiple asseration using and()
         * 7- Pass values(expected result)values i want to check in should() and and() methods 
         */


        cy.url().should('include', 'orangehrmlive.com');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain', 'opensource-demo');

        //We can use multiple asseration on same element using should and and 
        cy.url().should('include', 'orangehrmlive.com')
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'opensource-demo');

        cy.url().should('include', 'orangehrmlive.com') //it consider it as one test case so if one of then fail all test cases will faill too
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'opensource-demo');

        cy.title().should('eq', "OrangeHRM")
            .and('include', "Orange")
            .and('not.contain', "OrangeHRMMM");

        //I want to check wether (an element) is visible , exist or not
        /**1- indetify element using get(locator)
         * 2- assert element using visisble and exist keyword 
         * 3- assert element using and() and should() methods 
         * */

        //exist different from visible because element may be exist but no visible
        cy.get("[alt='company-branding']")
            .should('be.visible') //check wether an element visible or not 
            .and('exist'); //check wether an element exsist in website or not 

        cy.xpath("//a").should("have.length", 5); //I want to know how any links in the web page

        //ممكن لوعندي اكتر من ايتم وعايزه اجيبهم كلهم مره واحده في سطر واحد اعمل كده
        cy.get("[name='username'").type("Mariam")
            .get("[name='password']").type("123456");

        cy.get("[name='username'").type("Mariam").should('have.value', 'MariamMariam');
    },
    );

    it("Explicit asseration", () => {
        /**
         * 1- Indentify element using get(loctor)
         * 
         */
        cy.get("[placeholder='Username']").type("Admin")
            .get("[placeholder='Password']").type("admin123");
        cy.get("[type='submit']").click();

        let expectedResult;

        cy.get(".oxd-userdropdown-name").then((value) => {
            expectedResult = value.text();
            cy.log(expectedResult);
        },);

        //we save this element into a varible and extract the text or value of this element using then((value)=>)
        //we take the value and preform any action we want 
        //so if we want to get the value of the element so we can preform any action we want we can use the((value)=>{})
        cy.get(".oxd-userdropdown-name").then((valeu) => {
            cy.log(valeu.text());
            let actualResult = valeu.text();
            expect(actualResult).to.equal(expectedResult);
            expect(actualResult).to.not.equal(expectedResult);


            assert.equal(actualResult, expectedResult);
            assert.notEqual(actualResult, expectedResult);
        },);
    },);

    //we can use this way to assert 
    it.skip("Then benfits ", () => {
        cy.title().then((value) => {
            cy.log(value);
            let title = value;
            expect(title).contain("OrangeHRM")
        },);
    },);
    //we can use this way to assert
    it.skip("Should assertion ", () => {
        cy.title().should('contain', "OrangeHRM");
    },);
},);