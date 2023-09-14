
const { Given, When, Then } = require('@cucumber/cucumber')
const { loginLogout } = require('../page-object/Navigation/login-logout')

const login = new loginLogout()
Given('I can successufully access the propery market portal using {string}', async (URL) => {
  //open link in tab
  await login.open(URL)
});

// When('lets login with {string} and {string}', async (username, password) => {
//   //login career portal Application
//   await career.login(username, password)
// });

// Then('logout the career portal', async () => {
//   //logout the career
//   await career.portalLogout()
// });