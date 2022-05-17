/* eslint-disable no-undef */
it("lets test percy", () => {
  cy.visit("http://localhost:3000/");
  cy.wait(2000);
  cy.percySnapshot();
});
