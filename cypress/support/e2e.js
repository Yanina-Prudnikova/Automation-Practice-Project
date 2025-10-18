// cypress/support/e2e.js
// глобальные импорты и привязки к объекту Cypress

// CommonJS require — максимально совместимо
const selectors = require('./selectors');
const urls = require('./urls');
const l10n = require('./l10n.json');
const requirements = require('./requirements');

// делаем доступными глобально через Cypress.*
Cypress.Selectors = selectors;
Cypress.Urls = urls;
Cypress.L10n = l10n;
Cypress.Requirements = requirements;

// Доп. команды (если есть)
require('./commands'); // если у тебя есть commands.js
