Prerequisites
Node.js: Ensure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

Git: You'll need Git to clone the project repository. You can download Git from: https://git-scm.com/

What is Playwright?

Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API


What is Cucumber.js?

Cucumber is a tool for running automated tests written in plain language...Cucumber.js is the JavaScript implementation of Cucumber and runs on Node and modern web browsers.

The code

Use Cucumber.js as a test runner
Write feature files in Gherkin syntax
Write custom step definitions in TypeScript
Use Playwright from the step definitions to automate the browser
Use Node's built in assert to module to make assertions.
So let's get started.

npm project setup
Install Node 10.17 or above, this is what Playwright requires. It's usually best to install the LTS (Long Term Support) version of Node.

Create a new, empty folder and run npm init to start a new npm project.

Next up, install our dependencies from npm:
npm i playwright @cucumber/cucumber typescript ts-node @types/node -D


Setup TypeScript
Run npx -p typescript tsc --init on the command line to generate a tsconfig.json. If you've never used npx, then no, it's not a spelling mistake. npx is a command that comes with npm 5.2 onwards that allows you to execute a command from an npm package, without having to install it globally first.

npm install
npx playwright install
npm install --save-dev cucumber-html-reporter
npm install cucumber-playwright @cucumber/cucumber chai --save-dev