const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return 
    },
    specPattern:"cypress/Integration/TestAPI/reqres.cy.js"
  },
});
