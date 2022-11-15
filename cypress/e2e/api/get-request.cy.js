/// <reference types ="cypress" />

describe("Get Request", () => {
  var results;

  it("Valide the status code of the /post api", () => {
    //Validate that you can access the api and the status should be 200 OK
    results = cy.request("http://localhost:3000/posts");
    results.its("status").should("equal", 200);
  });

  it("Validate /post api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accepts: "application/json",
      },
    }).then(response => {
        let body = JSON.parse(JSON.stringify(response.body));
        cy.log(body);

        //Confirm that post 1 has the correct title an author
        expect(body[0]).has.property("title", "Sam Json Server");
        expect(body[0]).has.property("author", "Sam");

        //Confirm all the keys are present for each object
        body.forEach(function(item) {
           expect(item).to.have.all.keys("id", "title", "author");
           cy.log("Auther: " + item["author"] + " & Title: " + item["title"])
        });
    })
  });
});
