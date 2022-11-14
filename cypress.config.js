const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://www.webdriveruniversity.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    },
  }
})