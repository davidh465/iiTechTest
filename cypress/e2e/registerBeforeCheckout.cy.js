const { enterUserDetails } = require('./helpers/registerUser');
const register = require('./helpers/registerUser');

describe('register a user', () => {

  before(() => {
    cy.visit('/', { failOnStausCode: false });
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get("a[href='/login']")
      .should('exist')
      .and('be.visible')
      .click();

  });
  beforeEach(() => {
     register.enterUsernameAndEmail();
      enterUserDetails();
     cy.url().should('eq', 'https://automationexercise.com/account_created');
     cy.get("[data-qa='continue-button']").click();
  });

  after(() => {
    cy.get("a[href='/delete_account']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.get("[data-qa='account-deleted']").should("exist").and("be.visible");
  });

  it('should execute Test Case 15: Place Order: Register before Checkout', () => {
  
    cy.contains(`Logged in as ${Cypress.env('testUser')}`);
    cy.get("a[href='/products']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.url().should('eq', 'https://automationexercise.com/products');

    for (let i = 1; i < 4; i++) {
      cy.get(`a[href='/product_details/${i}']`).should('exist').and('be.visible').click();
      cy.get("button[type='button']").should('exist').and('be.visible').click();
      cy.get("[data-dismiss='modal']").should('exist').and('be.visible').click();
      cy.get("a[href='/products']")
        .should('exist')
        .and('be.visible')
        .click();
    }

    cy.contains(' Cart').click();

    cy.get('.btn.btn-default.check_out').contains('Proceed To Checkout').click();
    cy.get('.btn.btn-default.check_out').contains('Place Order').click();

    cy.get("[action='/payment']").within(() => {
      cy.get("[data-qa='name-on-card']").should("exist").and("be.visible").type(`${Cypress.env('testUser')}`);
      cy.get("[data-qa='card-number']").should("exist").and("be.visible").type('456712345678901234');
      cy.get("[data-qa='cvc']").should("exist").and("be.visible").type('345');
      cy.get("[data-qa='expiry-month']").should("exist").and("be.visible").type('3');
      cy.get("[data-qa='pay-button']").should("exist").and("be.visible").type('2025');
      cy.get("[data-qa='pay-button']").should("exist").and("be.visible").click();
      });

      cy.get('[data-qa="order-placed"][style="color: green;"]').contains('Order Placed!');
  });
});



