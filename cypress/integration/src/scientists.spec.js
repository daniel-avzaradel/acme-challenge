/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(2000);
  });

  it("should be a list of scientists in the initial screen", () => {
    //The project's initial screen will be a list of scientists.
    cy.get("#root > div:nth-child(2) > table tbody tr").should(
      "have.length.greaterThan",
      0
    );
  });

  it("should contain a search engine", () => {
    //that should contain a search engine to facilitate filtering all those displayed in the list.
    cy.get('[placeholder="Search by name..."]').should("be.visible");
    cy.get("#natFilter").should("be.visible");
    cy.get("#genderFilter").should("be.visible");
  });

  it("Limit each page request to 25 results so as not to overload the API.", () => {
    cy.get("#root > div:nth-child(2) > table tbody tr").should(
      "have.length.at.most",
      25
    );
  });

  it("Add paging parameter to control Loading more", () => {
    cy.get("#pagination").should("be.visible");
  });

  it("there is a view button to expand the scientist data", () => {
    cy.get("[data-testid=AccountCircleIcon]").should("be.visible");
    cy.get("[data-testid=AccountCircleIcon]").eq(2).click();
  });

  it("check for image, full name, email, gender, date of birth and nationality", () => {
    cy.get("[data-testid=AccountCircleIcon]").eq(2).click();
    cy.get("img").should("be.visible");

    cy.get("p").contains("Email").should("be.visible");
    cy.get("p").contains("Gender").should("be.visible");
    cy.get("p").contains("Date of Birth").should("be.visible");
    cy.get("p").contains("Nationality").should("be.visible");
  });

  it.only("filter by gender", () => {
    cy.get("#genderFilter").select("Male");
    // cy.get("tbody tr td")
    //   .each((item) => {
    //     cy.get(item).contains("male").should("be.visible");
    //   });
  });
});
