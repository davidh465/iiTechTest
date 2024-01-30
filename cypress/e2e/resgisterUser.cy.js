const { enterUserDetails } = require('./helpers/registerUser');
const register = require('./helpers/registerUser');

describe('register a user', () => {

  before(() => {
    cy.visit('/', { failOnStausCode: false });
    cy.url().should('eq', 'https://automationexercise.com/');
  });

  beforeEach(() => {
    cy.get("a[href='/login']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.url().should('eq', 'https://automationexercise.com/login');
  });

  after(() => {
    cy.get("a[href='/delete_account']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.get("[data-qa='account-deleted']").should("exist").and("be.visible");
    cy.get("[data-qa='continue-button']").click();
  });

  it('should execute Test Case 1: Register User', () => {
    register.enterUsernameAndEmail();
    enterUserDetails();
    cy.url().should('eq', 'https://automationexercise.com/account_created');
    cy.get("[data-qa='continue-button']").click();
  });
});


