describe("Tables", () => {
    //cypress hock

    it.skip("Check Numbers Rows & Cokumns ", () => {
        /**
         * 1- fisrt we will chose a propre selector so we can select all values in the table
         * 2- assert them with(should('have.lenght'));
         */

        //check cloumns
        cy.get("table.table-bordered>thead>tr>th").should("have.length", 10);

        //check rows
        cy.get("table.table-bordered>tbody>tr").should("have.length", 20);
    });

    it.skip("Check cell datat from specific row ", () => {
        cy.get("table.table>tbody>tr:nth-child(3)>td:nth-child(2)").contains(
            "Firefox 2.0"
        );
        // cy.get("tbody tr.odd td").contains("Camino 1.0");
    });

    it.skip("Read all data of Rows and Columns in the first page", () => {
        cy.visit(
            "https://moatazeldebsy.github.io/test-automation-practices/#/tables"
        );

        //we use $ as a  jQuery-wrapped elements  means that we can use methods in jQuery
        cy.get("table.min-w-full>tbody>tr").each(($row, index, $rows) => {
            //here we loop of rows

            cy.wrap($row).within(() => {
                //rwap the single row

                //we use just "td" because
                cy.get("td").each(($col, index, $cols) => {
                    //extract values from each column by loop on columns also

                    cy.log($col.text());
                });
            });
        });
    });

    it.only("Pagination", () => {
        cy.visit("https://adminlte.io/themes/v3/pages/tables/data.html");

        //final all pages
        let allPages;
        cy.get("#example2_info").then((value) => {

            let myText = value.text();

            //here we extract elements by substring function
            allPages = myText.substring(
                myText.indexOf("of") + 1,
                myText.indexOf("entries") - 1
            );
            cy.log("All Pages ====> " + allPages);
        });
        for (let i = 0; i <= allPages; i++) {   //57

            // loop on all pages and then get value on second coulmn
            cy.get(`ul.pagination > li:nth-child(${i})`).eq(0).click();

            cy.get("table.table-bordered>tbody>tr").each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td:nth-child(2)").then((value) => {
                        cy.log("Valuee==>" + value.text());
                    });
                });
            });
        }
    });
});
