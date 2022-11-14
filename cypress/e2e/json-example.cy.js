/// <reference types="Cypress" />

describe("JSON Object", () => {
    it("JSON Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]

const exampleArrayOfObjects = [{"key": "Luke"}, {"key2": "Perry"}, {"key3": "Password"} ];

cy.log(exampleArrayOfObjects[0].key);
cy.log(exampleArrayOfObjects[1].key2);
cy.log(exampleArrayOfObjects[2].key3);


    //     const users = {"firstName": "Joe", "lastName": "Blogs", "age": 52, 
    //     "Students": [
    //         {
    //             "firstName": "Jim", 
    //             "lastName": "Blogs2",
    //         },
    //         {
    //             "firstName": "Andrew", 
    //             "lastName": "Smith",
    //         }
    // ]}
        
    //     cy.log(exampleObject["key"]);
    //     cy.log(exampleObject["key2"]);

    //     cy.log(exampleArrayOfValues[0]);
    //     cy.log(exampleArrayOfValues[1]);
    //     cy.log(exampleArrayOfValues[2]);

    //     cy.log(users.Students[0].lastName);

    })
})