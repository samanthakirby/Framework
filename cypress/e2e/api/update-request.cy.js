/// <reference types ="cypress" />

describe("Update Request", () => {
  it("Update an existing post via the /post api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "Where are my apples?",
        author: "Panda Podge",
      },
      //Validate that it was updated and the response is 200
    }).then((response) => {
        expect(response.status).to.eql(200);
      });
  });
});
