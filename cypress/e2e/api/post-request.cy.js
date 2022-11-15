/// <reference types ="cypress" />

describe("Post Request", () => {
  //Add all the titles returned from the api into an array
  var titleOfPosts = new Array();

  //Create random name
  let randomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("Create a new post via /post api", () => {
    //Create the post
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: randomTitle,
        author: "Jane Smith",
      },
      //Validate that it was added and the response is 201
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it("Validate title of latest post", () => {
    //Get the data from the api
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accepts: "application/json",
      },
      //Grab the title of each title
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          titleOfPosts.push(item["title"]);
        });
        //Assert the last added post's title is correct
      })
      .then(() => {
        var latestPost = titleOfPosts[titleOfPosts.length - 1];
        expect(latestPost).to.eq(randomTitle);
      });
  });
});
