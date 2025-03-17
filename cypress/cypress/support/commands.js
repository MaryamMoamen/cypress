//This file we use it so we can write commondas and this command will allow us access methods and proreiteies in library
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
import 'cypress-xpath';
//require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'


//Custome commond for iframe 
Cypress.Commands.add('getIFrame', (iframe) => {
    return cy.get(iframe) //acess frame
        .its("0.contentDocument.body") //access document below frame
        .should("be.visible") //check if frame visible 
        .then(cy.wrap);  //wrap
});

//Create custome commond for clicking on link
Cypress.Commands.add('clickOnLink', (label) => {
    //here we get a element which describe link and check on its value and preforme clicking 
    cy.get('a').contains(label).click();
},);

//Overwrite a builtin method 
//contains() method doesn't accept (Upper and lower case ) so we overwrite the method so we can ignore this issue 
Cypress.Commands.overwriteQuery("contains", (originalFn, subject, filter, text, options = {}) => {
    if (typeof text === "object") {
        options = text;
        text = filter;
        filter = undefined;
    }
    options.matchCase = false;
    return originalFn(subject, filter, text, options);
});
Cypress.Commands.add('loginCommond',(email,password)=>{
    cy.get("[name='username']").type(email);
    cy.get("[name='password']").type(password);
    cy.get("[type='submit']").click();
})