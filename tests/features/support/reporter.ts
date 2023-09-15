// cucumber.ts

import cucumberHtmlReporter from 'cucumber-html-reporter';

// Define your Cucumber.js configuration
export = {
  // Your other configuration options here...

  // Add an 'afterAll' hook to generate the HTML report
  afterAll: function() {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'tests\features\support\reports\cucumber-report.htmln', // Path to your Cucumber JSON report file
      
      output: 'tests\features\support\reports\cucumber-report.html', // Desired name of the HTML report file
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        'App Version': '1.0',
        'Test Environment': 'Staging',
        'Browser': 'Chrome 93.0',
        'Platform': 'Windows 10',
      },
    };

    cucumberHtmlReporter.generate(options);
  },
};
