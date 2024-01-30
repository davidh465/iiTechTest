function createUser() {
  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: true,
    body: {
      'name': 'rtTest',
      'email': 'qwerty123@email.com',
      'password': 'Qwerty1234!',
      'firstname': 'david',
      'lastname': 'Haines',
      'address1': '1',
      'address2': 'fake street',
      'country': 'United States',
      'state': 'Alaska',
      'city': 'Haines',
      'zipcode': '99827',
      'mobile_number': '07891234567'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
}
exports.createUser = createUser;
