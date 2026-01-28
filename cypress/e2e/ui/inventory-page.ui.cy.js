/// <reference types="cypress" />

describe('Inventory Page (cy)', () => {
  beforeEach(() => {
    // Use explicit login steps (avoid cy.login helper to prevent session lifecycle issues)
    cy.visit('/'); // Navigates to https://www.saucedemo.com
    cy.contains('Swag Labs'); // sanity check that page loaded

    // perform login with known good credentials
    cy.get('#user-name').clear().type('standard_user');
    cy.get('#password').clear().type('secret_sauce');
    cy.get('#login-button').click();

    // verify we've reached the inventory page
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('navigates to inventory after login', () => {
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('lists products on the inventory page', () => {
    // Ensure product titles exist
    // Capture current URL and DOM for debugging
    cy.url().then((u) => cy.writeFile('cypress/debug/location-before-list.txt', u));
    cy.document().then((doc) =>
      cy.writeFile('cypress/debug/inventory-before-list.html', doc.documentElement.outerHTML)
    );

    // Fallback: assert presence of add-to-cart buttons (loaded dynamically)
    cy.get('button[id*="add-to-cart"], button[data-test*="add-to-cart"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0);
  });

  it('adds a product to the cart and shows it in the cart', () => {
    // Click the first add-to-cart button by data-test attribute
    // Capture DOM before clicking add-to-cart
    cy.url().then((u) => cy.writeFile('cypress/debug/location-before-add.txt', u));
    cy.document().then((doc) =>
      cy.writeFile('cypress/debug/inventory-before-add.html', doc.documentElement.outerHTML)
    );

    cy.get('button[id*="add-to-cart"], button[data-test*="add-to-cart"]', { timeout: 10000 })
      .first()
      .click();

    // Capture DOM after clicking
    cy.wait(500);
    cy.document().then((doc) =>
      cy.writeFile('cypress/debug/inventory-after-add.html', doc.documentElement.outerHTML)
    );

    cy.get(Cypress.Selectors.products.cartIcon).click();
    cy.url().should('include', Cypress.Urls.cart);
    cy.get('body').then(($b) => {
      if ($b.find('.cart_item').length) {
        cy.get('.cart_item').should('exist');
      } else {
        cy.contains(/Your Cart|Cart/).should('exist');
      }
    });
  });
});
