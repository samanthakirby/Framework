/// <reference types="Cypress" />


describe("Test contact us form via Webdriver Uni", () => {


    it("Should be able to submit via contact form", () => {
        cy.visit("/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').click().type("Samantha");
        cy.get('[name="last_name"]').click().type("Louw");
        cy.get('[name="email"]').click().type("sam@test.com");
        cy.get('textarea.feedback-input').click().type("This is a message");
        cy.get('[type="submit"]').click();
        cy.get('h1').should("have.text", "Thank You for your Message!");
        cy.url().should("equal", "https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html");

    })

    it.only("Should not be able to submit via contact form - all fields required", () => {
        cy.visit("/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').click().type("Samantha");
        cy.get('[type="submit"]').click();
        cy.get('body').should("contain.text", "Error: all fields are required")
    })
})