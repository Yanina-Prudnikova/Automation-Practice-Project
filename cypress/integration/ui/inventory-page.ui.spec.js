/**
 * cypress/integration/ui/inventory-page.ui.spec.js
 *
 * Duplicate location for older Cypress layouts — mirrors the e2e spec.
 */

describe('Inventory Page (integration folder)', () => {
  before(() => {
    // TODO: create issue if login fails: https://github.com/Yanina-Prudnikova/Automation-Practice-Project/issues/NN
    cy.login('standard_user');
  });

  it('shows inventory and allows adding to cart', () => {
    cy.url().should('include', Cypress.Urls.inventory);
    cy.get('button[id*="add-to-cart"], button[data-test*="add-to-cart"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
      .first()
      .click();
    cy.get(Cypress.Selectors.products.cartIcon).click();
    cy.get('.cart_item').should('exist');
  });
});
