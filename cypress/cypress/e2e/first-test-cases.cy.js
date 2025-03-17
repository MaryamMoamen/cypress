//const cypress = require('cypress');

describe('My Tests', () => {

  beforeEach(() => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Positive title ', () => {
    
    cy.title().should('eq', "OrangeHRM"); //Asseration
  },)

  it('Negative title ', () => {
    cy.title().should('eq', "OrangeHRMMM");
  },)

},)