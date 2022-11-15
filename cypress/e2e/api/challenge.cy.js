/// <reference types ="cypress" />

describe("Challenge", () => {
    //Add all the titles returned from the api into an array
    var titleOfComments = new Array();
  
    it("Create a new comment via /post api", () => {
      //Create the post
      cy.request({
        method: "POST",
        url: "http://localhost:3000/comments",
        body: {
          body: "This is created via cypress for the challenge",
        },
        //Validate that it was added and the response is 201
      }).then((response) => {
        expect(response.status).to.eql(201);
      });
    });
  
    it("Validate comment", () => {
      //Get the data from the api
      cy.request({
        method: "GET",
        url: "http://localhost:3000/comments",
        headers: {
          accepts: "application/json",
        },
        //Grab the title of each title
      })
        .then((response) => {
          let body = JSON.parse(JSON.stringify(response.body));
          body.forEach(function (item) {
            titleOfComments.push(item["body"]);
          });
          //Assert the last added post's title is correct
        })
        .then(() => {
          var latestPost = titleOfComments[titleOfComments.length - 1];
          expect(latestPost).to.eq("This is created via cypress for the challenge");
        });
    });

    it("Delete comment", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/3",
            //Validate that it was updated and the response is 200
          }).then((response) => {
            expect(response.status).to.eql(200);
          });
      });
  });
  