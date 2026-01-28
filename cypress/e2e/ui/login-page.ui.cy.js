/// <reference types="cypress" />

// ===============================
// 1. First context — IMPLEMENTED
// ===============================
context('Login Page - UI Validation', () => {
  beforeEach(() => {
    cy.visit(Cypress.Urls.login); // global variable from e2e.js
  });

  it('Username field is visible', () => {
    cy.get(Cypress.Selectors.login.username).should('be.visible');
  });

  it('Password field is visible and masked', () => {
    cy.get(Cypress.Selectors.login.password)
      .should('be.visible')
      .and('have.attr', 'type', 'password');
  });

  it('Login button is visible', () => {
    cy.get(Cypress.Selectors.login.submitBtn).should('be.visible');
  });

  it('Page title text is visible', () => {
    cy.contains(Cypress.L10n.en.appTitle).should('exist');
  });
});

// ==================================================
// 2. All other contexts are marked as SKIPPED
// ==================================================
context.skip('Login Page - Positive Login', () => {
  // TODO: https://github.com/Yanina-Prudnikova/Automation-Practice-Project/issues/4
});

context.skip('Login Page - Negative Login', () => {});

context.skip('Login Page - Validation', () => {});

context.skip('Login Page - Locked User', () => {});

context.skip('Login Page - UI Behavior', () => {});

context.skip('Login Page - Accessibility', () => {});

context.skip('Login Page - Security Checks', () => {});

context.skip('Login Page - Throttling', () => {});

context.skip('Login Page - Navigation', () => {});

context.skip('Login Page - Localization', () => {});

context.skip('Login Page - Session Handling', () => {});

context.skip('Login Page - Responsive', () => {});
