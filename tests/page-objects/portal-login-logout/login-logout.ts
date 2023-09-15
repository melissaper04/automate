import assert from 'assert';
import { page } from '../../features/support/hooks'
import { expect } from 'chai';

export class Login {

      // loginButtonSelector = 'button[data-type="login"]';
    //   this.email = '#ctl00_ctl00_BotContent_loginSignup_email_address';
    //   this.password = '#ctl00_ctl00_BotContent_loginSignup_txtpassword';
    //   this.signUp = '#ctl00_ctl00_BotContent_loginSignup_BtnReg';
    //   this.lout = '#ctl00_ctl00_BotContent_hreflogout';

  
    // Open the CareerPortal page with the given URL
    async open(URL: string) {
 
      // Navigate to the provided URL
      await page.goto(URL);
         // Get the page title
    const pageTitle = await page.title();

    // Check if the page title contains the desired keyword
    const keyword = 'Domain'; // Replace with your desired keyword
    // assert(pageTitle.includes(keyword), `Page title should contain "${keyword}"`);
    await expect(pageTitle).to.include(keyword);
    // await expect(page).toHaveTitle(/Domain/);

    await page.getByTestId('header-button-login').click();
    await page.getByPlaceholder('Email address').click();
    await page.getByPlaceholder('Email address').fill('mel@mailinator.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('AA12345@');
    await page.getByRole('button', { name: 'Log in' }).click();
    
    }
  



    // // Perform login using the provided username and password
    // async login(username, password) {
    //   // Click the login button
    //   await global.page.click(this.loginButton);
    //   // Fill in the email and password fields
    //   await global.page.fill(this.email, username);
    //   await global.page.fill(this.password, password);
    //   // Click the sign-up button to log in
    //   await global.page.click(this.signUp);
    // }
  
    // // Perform logout from the CareerPortal
    // async portalLogout() {
    //   // Click the logout button to log out from the portal
    //   await global.page.click(this.logout);
    // }
  
  }
