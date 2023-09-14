const { Given, When, Then } = require('@cucumber/cucumber')
const { Login } = require('../page-objects/portal-login-logout/login-logout')

const login = new Login()

Given('I can successufully access the propery market portal using {string}', async function (url)  {
  //open link in tab
  await login.open(url)
});

// When('lets login with {string} and {string}', async (username, password) => {
//   //login career portal Application
//   await career.login(username, password)
// });

// Then('logout the career portal', async () => {
//   //logout the career
//   await career.portalLogout()
// });