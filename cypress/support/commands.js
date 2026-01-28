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
// Reusable custom commands for tests

// login command: accepts a username key. Prefer Cypress.env('users') or CI secrets.
Cypress.Commands.add('login', (userKey = 'standard_user') => {
	const envUsers = Cypress.env('users');
	const defaultCreds = { username: 'standard_user', password: 'secret_sauce' };
	const user = (envUsers && envUsers[userKey]) || defaultCreds;

	cy.visit(Cypress.Urls.login || '/');
	cy.get(Cypress.Selectors.login && Cypress.Selectors.login.username ? Cypress.Selectors.login.username : '#user-name')
		.clear()
		.type(user.username);
	cy.get(Cypress.Selectors.login && Cypress.Selectors.login.password ? Cypress.Selectors.login.password : '#password')
		.clear()
		.type(user.password);
	cy.get(Cypress.Selectors.login && Cypress.Selectors.login.submitBtn ? Cypress.Selectors.login.submitBtn : '#login-button').click();
});

// Register API helper commands if present
try {
	// these files are optional; require them if they exist
	require('./api/ping');
	require('./api/booking');
} catch (e) {
	// eslint-disable-next-line no-console
	console.warn('API support commands not loaded:', e && e.message ? e.message : e);
}

// ***********************************************
// Example commands and notes can remain below
// ***********************************************