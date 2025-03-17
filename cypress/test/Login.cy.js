describe("Login Test", () => {
    before(() => { // the before() hook in Mocha runs once before all test cases in a describe block, not before every test case.
        console.log("Run the server");
    })
    beforeEach(() => {
        console.log("Open the page ");
    });
    it("Login with valid email and valid password", () => {
        console.log("Enter a valid name ");
        console.log("Enter a valid password ");
        console.log("Click on login button ");

    })

    it.skip("Login with invalid email and valid password", () => {
        console.log("Enter an invalid name ");
        console.log("Enter an invalid password ");
        console.log("Click on login button ");

    })
    it.only("Verify when user enter an invalid name by enter first letter blank", () => {
        console.log("Enter the first letter blank");
        console.log("Enter a valid password");
        console.log("Click on login button ");
        console.log("User shouldn't be able to login successfully");
    },);
    afterEach(() => {
        console.log("Close test case");
    });
    after(() => {
        console.log("close websites");
    });
})
//install  mocha framwork 
//install pagek.json 
//install cypress
//using commond  npx mocha foldername/filename to run specification files