const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // базовый URL для всех тестов
    baseUrl: 'https://www.saucedemo.com',
    
    // путь к папке с тестами
    specPattern: 'cypress/e2e/**/*.cy.js',
    
    // настройка среды
    env: {
      environment: 'development'
    },

    setupNodeEvents(on, config) {
      // здесь можно настроить плагины
    },
  },
});
