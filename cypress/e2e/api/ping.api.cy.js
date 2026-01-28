/// <reference types="cypress" />

describe('Restful Booker API - Ping', () => {
  context('Ping endpoint', () => {
    it('responds to GET /ping', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'GET', url: `${url}/ping`, failOnStatusCode: false }).then((res) => {
          expect([200, 201]).to.include(res.status);
        });
      });
    });

    it('returns 404 for unknown route', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'GET', url: `${url}/ping-not-found`, failOnStatusCode: false }).then((res) => {
          expect([404, 400]).to.include(res.status);
        });
      });
    });
  });
});
