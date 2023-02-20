const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://automationteststore.com', // вказується без слеша в кінці, шоб в тестах можна було просто вказувати '/'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
