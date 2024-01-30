
const register = require('./helpers/registerUser');
const fakeUsername = "FaKeUser@email.com";
const fakePassword = "w2e34r5t6y";
describe('login with in valid user', () => {

  beforeEach(() => {
    cy.visit('/', { failOnStausCode: false });
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get("a[href='/login']")
      .should('exist')
      .and('be.visible')
      .click();
    cy.url().should('eq', 'https://automationexercise.com/login');
  })

  it('should execute Test Case 2: Login User with correct email and password', () => {
    register.login(fakeUsername, fakePassword);
    cy.get('p[style="color: red;"]').contains('Your email or password is incorrect!');

  });
});



