import { defineConfig } from 'cypress'

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	video: true,
	defaultCommandTimeout: 30000,
	e2e: {
		baseUrl: 'http://automationpractice.com/index.php',
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on)
		},
	},
})
