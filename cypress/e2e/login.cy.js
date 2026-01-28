describe('SauceDemo Login Test', () => {
  it('should open the homepage', () => {
    cy.visit('/'); // Navigates to https://www.saucedemo.com
    cy.contains('Swag Labs'); // Check that the page loaded
  });

  it('should login with valid credentials', () => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user'); // enter username
    cy.get('#password').type('secret_sauce'); // enter password
    cy.get('#login-button').click(); // click the button

    // Verify navigation to products page
    cy.url().should('include', '/inventory.html');
    cy.contains('Products');
  });
});
