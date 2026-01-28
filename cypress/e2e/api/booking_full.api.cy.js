/// <reference types="cypress" />

describe('Restful Booker API - Booking (full lifecycle)', () => {
  let bookingId = null;

  context('Create booking', () => {
    it('creates a booking (POST /booking)', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        const payload = f.sampleBooking;

        cy.request({ method: 'POST', url: `${url}/booking`, body: payload }).then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('bookingid');
          bookingId = res.body.bookingid;
        });
      });
    });
  });

  context('Retrieve and update booking', () => {
    it('retrieves the booking (GET /booking/:id)', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'GET', url: `${url}/booking/${bookingId}` }).then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('firstname', f.sampleBooking.firstname);
        });
      });
    });

    it('patches the booking (PATCH /booking/:id) with auth', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'POST', url: `${url}/auth`, body: f.auth }).then((authRes) => {
          expect(authRes.status).to.equal(200);
          const token = authRes.body.token;

          const patchBody = { firstname: 'PatchedName' };
          cy.request({
            method: 'PATCH',
            url: `${url}/booking/${bookingId}`,
            body: patchBody,
            headers: { Cookie: `token=${token}` },
          }).then((patchRes) => {
            expect([200, 201]).to.include(patchRes.status);
          });
        });
      });
    });

    it('rejects patch without auth', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'PATCH', url: `${url}/booking/${bookingId}`, body: { firstname: 'NoAuth' }, failOnStatusCode: false }).then((res) => {
          expect([401, 403]).to.include(res.status);
        });
      });
    });
  });

  context('Replace (PUT) and Delete booking', () => {
    it('replaces the booking (PUT /booking/:id) with auth', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'POST', url: `${url}/auth`, body: f.auth }).then((authRes) => {
          expect(authRes.status).to.equal(200);
          const token = authRes.body.token;

          const fullBody = f.updatedBooking || f.sampleBooking;
          cy.request({ method: 'PUT', url: `${url}/booking/${bookingId}`, body: fullBody, headers: { Cookie: `token=${token}` } }).then((putRes) => {
            expect([200, 201]).to.include(putRes.status);
            // verify the resource was replaced
            cy.request({ method: 'GET', url: `${url}/booking/${bookingId}` }).then((getRes) => {
              expect(getRes.status).to.equal(200);
              expect(getRes.body).to.have.property('firstname', fullBody.firstname);
            });
          });
        });
      });
    });

    it('deletes the booking (DELETE /booking/:id) with auth', () => {
      cy.fixture('api').then((f) => {
        const url = Cypress.env('API_BASE_URL') || f.baseUrl;
        cy.request({ method: 'POST', url: `${url}/auth`, body: f.auth }).then((authRes) => {
          expect(authRes.status).to.equal(200);
          const token = authRes.body.token;

          cy.request({ method: 'DELETE', url: `${url}/booking/${bookingId}`, headers: { Cookie: `token=${token}` }, failOnStatusCode: false }).then((delRes) => {
            expect([201, 200, 204]).to.include(delRes.status);
            // subsequent GET should return 404
            cy.request({ method: 'GET', url: `${url}/booking/${bookingId}`, failOnStatusCode: false }).then((getRes) => {
              expect(getRes.status).to.equal(404);
            });
          });
        });
      });
    });
  });
});
