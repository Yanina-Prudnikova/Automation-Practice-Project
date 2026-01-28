# Naming Conventions

## Components

- Component names: **PascalCase** (`UserProfile`, `NavBar`)
- Component file names: match the component name (`UserProfile.js`)

## Pages

- Page file names: **PascalCase** (`HomePage.js`, `AboutPage.js`)
- Route paths: **kebab-case** (`/home-page`, `/about-us`)

## CSS/Styles

- CSS module files: `ComponentName.module.css` (`UserProfile.module.css`)
- For global styles, use a separate `styles/` folder

## Other Elements

- **Functions and variables:** camelCase (`fetchData`, `userName`)
- **Constants:** UPPER_SNAKE_CASE (`API_URL`, `MAX_COUNT`)

## Tests (Cypress)

- **Test file names:** Use `*.cy.js` for test files and mirror the feature/area under test. Use kebab-case for filenames: `login.cy.js`, `products/add-to-cart.cy.js`.
- **Test file placement:** Place end-to-end tests under `cypress/e2e/` and UI-focused specs under `cypress/e2e/ui/`.
- **API tests:** Place API specs under `cypress/e2e/api/` and name files with `.api.cy.js` suffix (example: `ping.api.cy.js`, `booking_full.api.cy.js`).
- **API test titles:** Use `describe('API - <Resource>', ...)` and group endpoints with `context()` (e.g., `context('Create', ...)`, `context('Retrieve', ...)`).
- **API command names:** Use `cy.<verb><Resource>` style for custom commands, e.g. `cy.createBooking()`, `cy.getBooking(id)`, `cy.patchBooking(id, body, token)`, `cy.putBooking(id, body, token)`, `cy.deleteBooking(id, token)`.
- **Avoid hardcoded environment values:** Read API base URLs and credentials from fixtures or `Cypress.env()`; prefer `cypress/fixtures/api.json` and `Cypress.env('API_BASE_URL')`.
- **Top-level blocks:** Use `describe()` for a feature or page. Title should be a noun phrase matching the feature: `describe('Login Page', ...)`.
- **Context blocks:** Use `context()` to group related scenarios or preconditions. Phrase as a short clause: `context('when user is locked out', ...)`.
- **It blocks (tests):** Start titles with an explicit expectation verb and keep them human-readable. Prefer `it('shows error for locked user')` or full sentence `it('displays an error when locked user attempts login')`.
- **Title style:** Keep titles lean and consistent: either sentence-style with verbs or short noun phrases for `describe`. Avoid mixing both styles inside the same file.
- **Test granularity:** Each `it` should assert a single high-level behavior (one logical expectation). Use additional assertions only when directly related.

## Cypress Commands & Fixtures

- **Custom commands:** Add reusable flows to `cypress/support/commands.js`. Name commands as verbs in camelCase: `loginAsStandardUser()`, `addProductToCart()`.
- **Commands signature:** Accept optional `options` object instead of many positional args to keep extensibility: `Cypress.Commands.add('login', (opts = {}) => { ... })`.
- **Fixture files:** Store test data in `cypress/fixtures/` and use descriptive filenames: `users.json`, `product-catalog.json`.
- **Sensitive data:** Never commit real credentials. Keep `sensitive-data` out of the repo and use `env` variables or CI secrets (access via `Cypress.env('USERNAME')`). Add `env-users.dev.example.json` as a placeholder if needed.
- **Selectors:** Prefer data attributes for stable selectors: use `data-cy='login-button'` and locate with `cy.get('[data-cy=login-button]')`.

## Examples

- `describe('Login Page', () => { context('with valid credentials', () => { it('logs in and shows products', () => { ... }) }) })`
- `cypress/e2e/login.cy.js` — top-level e2e test for login
- `cypress/support/commands.js` — `Cypress.Commands.add('loginAsStandardUser', () => { ... })`
