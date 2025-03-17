class LoginModel {

//Page Object Model ==> (Elements + Actions )

    setUserName(userName) {
        cy.get("[name='username']").type(userName);

    }
    setPassword(password) {
        cy.get("[name='password']").type(password);
    }
    clickOnSubmit() {
        cy.get("[type='submit']").click();

    }
    setValidation(validationText) {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain.text", validationText);
    }
}
export default LoginModel //expoet class 