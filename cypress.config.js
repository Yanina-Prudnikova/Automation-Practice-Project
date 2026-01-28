const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      environment: 'dev', // or 'qa' or 'prod' — change this at runtime
    },
    supportFile: 'cypress/support/e2e.js',
  },
});
