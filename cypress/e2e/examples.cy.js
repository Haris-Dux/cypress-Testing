describe("multipage testing", () => {
  beforeEach("before visit", () => {
    cy.visit("examples");
  });
  it("should visit every page", () => {
    cy.getTestData("overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getTestData("fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getTestData("examples").click();
    cy.location("pathname").should("equal", "/examples");
  });

  it("check response", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getTestData("api-call").click();
  });

  it.only("state Testing", () => {
    cy.contains(/Add Some Grudges/i);

    cy.getTestData("grudge-input").within(() => {
      cy.get("input").type("Add some grudges");
    });

    cy.getTestData('grudge-button').click();

    cy.getTestData('grudge-list').within(() => {
        cy.get('li').should('have.length',1)
    })

    cy.getTestData("grudge-input").within(() => {
        cy.get("input").type("grudge number 2");
      });
  
      cy.getTestData('grudge-button').click();

      cy.getTestData('grudge-list').within(() => {
        cy.get('li').should('have.length',2)
        cy.get('li').its(0).should('contain.text','Add some grudges')
    })
  });

});
