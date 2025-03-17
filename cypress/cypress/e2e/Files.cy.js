import 'cypress-file-upload';

describe("Dealing with files ", () => {

    it("Upload single file", () => {
        /**
         * 1- Intsall file uploading packaged
         * 2- Visit web page
         * 3- Call attachFile method
         * Put files into fixture folder 
         * Assert an event after uploading
         */
        /**
         * هنا اتعلمت انه اوقات بيكون فيه مشكله في الويب سايت نفسه فا عشان اتجنب الايرور ده هكتب الكود ده 
         * التاج الوحيد الي لازم ارفع فيه البي دي اف لازم يكون (input tag)
         */
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors from the application
        });

        cy.visit("https://practice.expandtesting.com/upload");

        // Attach file (make sure Test1.pdf is inside cypress/fixtures/)
        cy.get("#fileInput").attachFile("Test1.pdf"); //هنا بجيب المكان اللي هرفع فيه الفايل 

        // Click the submit button (Ensure the correct selector)
        cy.get("#fileSubmit").click(); //هنا بكليك على الزرار 

        // Verify the uploaded file name (use contains to handle dynamic prefixes)
        cy.get("#uploaded-files p").should("contain", "Test1.pdf");

    },);

    it("Upload files -> Rename", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors from the application
        });
        cy.visit("https://practice.expandtesting.com/upload");
        //To rename file we pass 2 parameters into attachFile()the file path or the current name and the new name
        cy.get("#fileInput").attachFile({ filePath: "Test1.pdf", fileName: "Mariam.pdf" });

        cy.get("#fileSubmit").click();

        cy.get("#uploaded-files p").should("contain", "Mariam.pdf");
    },);

    it("Upload files -> Rename", () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors from the application
        },);
        cy.visit("https://the-internet.herokuapp.com/upload");

        //we need to indentify the drag box and attach file to it
        //if we need to drag and drop file in a box we pass this parameter { subjectType: 'drag-n-drop' } to attachFile()
        cy.get("#drag-drop-upload").attachFile("Test1.pdf", { subjectType: 'drag-n-drop' });

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should("contain", "Test1.pdf");

        cy.get("#file-submit").click();


    },);

    it("Upload multiple files", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get("#filesToUpload").attachFile(["Test1.pdf", "Test2.pdf"]);
        cy.wait(2000);
        cy.get("#fileList>li:first-child").should("contain", "Test1.pdf");

    },);

    it.only("Upload file -> Shadow dom", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
          //الشادو الي فهمته انه بيكون كونتنت بس مخفي وتحت روت اسمه شادو وعشان اتعامل مع اي ايلمنت جواااه او اشوفه لازم اديله البارميتر ده ({ includeShadowDom: true })

        cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile("Test2.pdf");

        cy.get(".smart-file>span:first-child", { includeShadowDom: true }).should("contain", "Test2.pdf");
        cy.wait(7000);
        cy.get(".smart-cancel-all-button", { includeShadowDom: true }).click();

    },);
},);