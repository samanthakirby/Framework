class HomePage_PO {
// Selectors

//Functions

visitHomePage(){
    cy.visit("https://www.webdriveruniversity.com/");
}

visitContactPage(){
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
}


}
export default HomePage_PO;