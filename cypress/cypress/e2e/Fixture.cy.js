require('../fixtures/orange.json')
describe("Fixture", () => {
    it.skip("Acess Data From Fixture File", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


        cy.fixture('orange.json').then((data) => {
            ///ظهر معايا ايرور ال(nan) وده كان بسب اني كتبت - في النص والمفروض لو هعملها يبقى اكتب الداتا كده
            cy.get("[name='username']").type(data["user-name"]);
            cy.get("[name='password']").type(data.password)
            cy.get("[type='submit']").click();

            cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", data.expected);
        },);

    },);

    let userDara;

    //✅ before() is the better choice because you only need to load the fixture once before all test cases run.
    beforeEach(() => { //هنا صح لانه المفروض المتغير يتملي بالداتا مره واحده 
        cy.fixture("orange.json").then((data) => {
            userDara = data;
        },);
    },);

    it("Acess Data From Fixture File Using Hooks ", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("[name='username']").type(userDara.userName);
        cy.get("[name='password']").type(userDara.password);

        cy.get("[type='submit']").click();

        cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", userDara.expected);

    },);
    it.only("Acess Data From Fixture File Using Hooks ", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("[placeholder='Username']").type(userDara.userName);
        cy.get("[name='password']").type(userDara.password);

        cy.get("[type='submit']").click();

        
        cy.get(".oxd-topbar-header-breadcrumb-module").then((value)=>{ //anthor way to assert 
            let actualResult = value.text();
            cy.log(actualResult);
            expect(actualResult).to.equal(userDara.expected);

        },);
   //     cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", userDara.expected);

    },);
},);