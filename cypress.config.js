const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    },
  }
})