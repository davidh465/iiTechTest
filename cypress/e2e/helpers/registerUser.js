
export function enterUsernameAndEmail() {
  cy.get("[action='/signup']").within(() => {
  cy.get("[data-qa='signup-name']").should("exist").and("be.visible").type(`${Cypress.env('testUser')}`);
  cy.get("[data-qa='signup-email']").should("exist").and("be.visible").type(`${Cypress.env('userName')}`)
  cy.get("[data-qa='signup-button']").should("exist").and("be.visible").click();
  });
}


export function login(username, password) {
  cy.get("[action='/login']").within(() => {
  cy.get("[data-qa='login-email']").should("exist").and("be.visible").type(username)
  cy.get("[data-qa='login-password']").should("exist").and("be.visible").type(password);
  cy.get("[data-qa='login-button']").should("exist").and("be.visible").click();

  });
}
export function enterUserDetails() {
  cy.get("[action='/signup']").within(() => {
    cy.get('#id_gender1').should('have.value', 'Mr').click();
    cy.get("[data-qa='password']").should("exist").and("be.visible").type(`${Cypress.env('password')}`);
    cy.get("[data-qa='days']").select('4');
    cy.get("[data-qa='months']").select('4');
    cy.get("[data-qa='years']").select('1999');

    // address info
    cy.get("[data-qa='first_name']").should("exist").and("be.visible").type("Qa!");
    cy.get("[data-qa='last_name']").should("exist").and("be.visible").type("Test");
    cy.get("[data-qa='address']").should("exist").and("be.visible").type("1");
    cy.get("[data-qa='address2']").should("exist").and("be.visible").type("Testing Road");

    cy.get("[data-qa='country']").select('United States');
    cy.get("[data-qa='state']").should("exist").and("be.visible").type("Alaska");
    cy.get("[data-qa='city']").should("exist").and("be.visible").type("Haines");
    cy.get("[data-qa='zipcode']").should("exist").and("be.visible").type("99827");
    cy.get("[data-qa='mobile_number']").should("exist").and("be.visible").type("07891234567");
    cy.get("[data-qa='create-account']").should("exist").and("be.visible").click();
  });
}


