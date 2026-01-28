// cypress/support/commands.js
// Reusable custom commands for tests

// login command: accepts a username key. Prefer Cypress.env('users') or CI secrets.
Cypress.Commands.add('login', (userKey = 'standard_user') => {
  // Preferred: provide credentials via Cypress environment (CI or local)
  // Example: set Cypress env var `users` to { standard_user: { username, password } }
  const envUsers = Cypress.env('users');
  const defaultCreds = { username: 'standard_user', password: 'secret_sauce' };
  const user = (envUsers && envUsers[userKey]) || defaultCreds;

  cy.visit(Cypress.Urls.login);
  cy.get(Cypress.Selectors.login.username).clear().type(user.username);
  cy.get(Cypress.Selectors.login.password).clear().type(user.password);
  cy.get(Cypress.Selectors.login.submitBtn).click();
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
