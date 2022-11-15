/// <reference types ="cypress" />

describe("Delete Request", () => {
  it("Delete an existing post via the /post api", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/9",
      //Validate that it was updated and the response is 200
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});