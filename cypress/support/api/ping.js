// cypress/support/api/ping.js
// Custom command for API ping
Cypress.Commands.add('apiPing', () => {
  return cy.fixture('api').then((f) => {
    const url = Cypress.env('API_BASE_URL') || f.baseUrl;
    return cy.request({ method: 'GET', url: `${url}/ping`, failOnStatusCode: false });
  });
});
