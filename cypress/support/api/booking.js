// cypress/support/api/booking.js
// Custom commands for Booking endpoint

Cypress.Commands.add('createBooking', (body) => {
  return cy.fixture('api').then((f) => {
    const url = Cypress.env('API_BASE_URL') || f.baseUrl;
    return cy.request({ method: 'POST', url: `${url}/booking`, body });
  });
});

Cypress.Commands.add('getBooking', (id) => {
  return cy.fixture('api').then((f) => {
    const url = Cypress.env('API_BASE_URL') || f.baseUrl;
    return cy.request({ method: 'GET', url: `${url}/booking/${id}`, failOnStatusCode: false });
  });
});

Cypress.Commands.add('auth', (credentials) => {
  return cy.fixture('api').then((f) => {
    const url = Cypress.env('API_BASE_URL') || f.baseUrl;
    const body = credentials || f.auth;
    return cy.request({ method: 'POST', url: `${url}/auth`, body });
  });
});

Cypress.Commands.add('patchBooking', (id, body, token) => {
  return cy.fixture('api').then((f) => {
    const url = Cypress.env('API_BASE_URL') || f.baseUrl;
    const headers = token ? { Cookie: `token=${token}` } : {};
    return cy.request({ method: 'PATCH', url: `${url}/booking/${id}`, body, headers, failOnStatusCode: false });
  });
});
