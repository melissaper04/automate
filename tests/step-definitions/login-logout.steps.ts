import { Given, When, Then } from '@cucumber/cucumber';
import { Login } from '../page-objects/portal-login-logout/login-logout'; // Adjust file extension if needed
const login = new Login();

Given('I can successfully access the job search portal using {string} using credentails {string} and {string}', async function(url : string, username : string, password : string) {
  // Open link in tab
  console.log("In step file!");
  await login.signin(url,username,password);
  
});


// Given('I can successufully access the propery market portal using {string}', async (url) => {
//   //login career portal Application
//   await page.goto(URL);
// });



// When('lets login with {string} and {string}', async (username, password) => {
//   //login career portal Application
//   await career.login(username, password)
// });

// Then('logout the career portal', async () => {
//   //logout the career
//   await career.portalLogout()
// });