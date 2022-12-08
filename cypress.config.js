const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {   
    defaultCommandTimeout: 4500, 
   "chromeWebSecurity": false,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
