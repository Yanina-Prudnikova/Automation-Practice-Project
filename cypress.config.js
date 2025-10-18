const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      environment: 'dev' // or 'qa' or 'prod' — этот кусок ты меняешь при запуске
    },
    supportFile: 'cypress/support/e2e.js'
  }
});

