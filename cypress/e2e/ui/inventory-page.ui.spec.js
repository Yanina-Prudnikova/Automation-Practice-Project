/**
 * cypress/e2e/ui/inventory-page.ui.spec.js
 *
 * Sequential UI use-cases for Login + Inventory pages.
 * These tests implement the happy path for login and a few inventory interactions.
 */

describe('Inventory Page', () => {
  before(() => {
    // Use shared login command. If login fails, create an issue and paste the link here.
    // TODO: https://github.com/Yanina-Prudnikova/Automation-Practice-Project/issues/NN
    cy.login('standard_user');
  });

  it('navigates to inventory after login', () => {
    cy.url().should('include', Cypress.Urls.inventory);
    cy.contains('Products').should('be.visible');
  });

  it('lists products on the inventory page', () => {
    cy.get(Cypress.Selectors.products.productTitle).should('have.length.greaterThan', 0);
  });

  it('adds a product to the cart and shows it in the cart', () => {
    // Click the first add-to-cart button using data-test attribute
    cy.get(Cypress.Selectors.products.addToCart).first().click();

    cy.get(Cypress.Selectors.products.cartIcon).click();
    cy.url().should('include', Cypress.Urls.cart);
    cy.get('.cart_item').should('exist');
  });
});
