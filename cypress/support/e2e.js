// cypress/support/e2e.js
// global imports and bindings to the Cypress object

// CommonJS require — maximally compatible
const selectors = require('./selectors');
const urls = require('./urls');
const l10n = require('./l10n.json');
const requirements = require('./requirements');

// expose these globally via Cypress.*
Cypress.Selectors = selectors;
Cypress.Urls = urls;
Cypress.L10n = l10n;
Cypress.Requirements = requirements;

// Additional commands (if any)
require('./commands'); // if you have commands.js
