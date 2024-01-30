const { createUser } = require('./helpers/createUser');
const register = require('./helpers/registerUser')

describe('register a user', () => {

  before(() => {
    createUser();
  });

  beforeEach(()=>{
    cy.visit('/', { failOnStausCode: false });
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get("a[href='/login']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.url().should('eq', 'https://automationexercise.com/login');
  })

  after(() => {
    cy.get("a[href='/delete_account']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.get("[data-qa='account-deleted']").should("exist").and("be.visible");
  });

  it('should execute Test Case 2: Login User with correct email and password', () => {
    register.login(`${Cypress.env('newUser')}`, `${Cypress.env('password')}`);
  });
});



