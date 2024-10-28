const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Adicione esta linha
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

