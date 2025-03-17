class LoginModel2 {
    //we store element locators in varaibles and extract them from methods we sperate them in varaibles 
    username = "[name='username']";
    password = "[name='password']";
    clickBtn = "type='submit']";
    validate = '.oxd-topbar-header-breadcrumb > .oxd-text' ; 
    setUserName(userName) {
        cy.get(this.username).type(userName);

    }
    setPassword(password) {
        cy.get(this.password).type(password);
    }
    clickOnSubmit() {
        cy.get(this.clickBtn).click();

    }
    setValidation(validationText) {
        cy.get(this.validate).should("contain.text", validationText);
    }
}
export default LoginModel2;