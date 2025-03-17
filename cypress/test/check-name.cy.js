//to import anthor file
const checkName = require('./name');
//import assertation style from chai and storing it into const(constatnt)
const chai = require('chai');
const assert = chai.assert; 

//test suite
describe("check name test cases", () => {
    //test case1
    it("check name with @", () => {

        //test steps
        let expectedResult = "USER";
        let actualResult = checkName("mariam@moamen");
        assert.equal(actualResult,expectedResult,"Assertion----")

        //console.log(result)

    },);
     //test case2
    it("check name with .", () => {

        //test steps
        let actualResult = checkName("mariam.moamen");
        let expectedResult = "USER";
        assert.equal(actualResult,expectedResult);

        //console.log(result)

    },);
     //test case3
    it("check name with correct name", () => {

        //test steps
        let actualResult = checkName("mariammoamen");
        let expectedResult = "mariammoamen";
        assert.equal(actualResult,expectedResult);

        //console.log(result)

    },);
     //test case4
    it("check name with correct name", () => {

        //test steps
        let actualResult = checkName("ahmed");
        let expectedResult = "ahmed";
        assert.equal(actualResult,expectedResult);
        
        //console.log(result)

    },);
     //test case5
    //Assert
    it("Correct", () => {
        assert('foo' !== 'bar', 'foo is not bar');
        //console.log(result)

    },);
    it("Correct", () => {
        //Asseration fail 
        assert.fail(1,2,"1 is not greater than 2",">");
        assert.fail("1 is not greater than 2");

        

    },);
},);